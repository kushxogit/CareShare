import React, { PropsWithChildren, useEffect, useState } from "react";
import { Layout, Spinner, Button } from "@ui-kitten/components";
import { ListAccessoriesShowcase } from "src/Frontend/Components/List/list";
import {
  IDonationData,
  IDonationDataWithUser,
} from "src/Frontend/types/donation-types";
import DonationService from "src/Frontend/Services/donation.service";
import { AuthProvider, useAuth } from "src/Frontend/Contexts/authContext";
import { User } from "src/Frontend/types/user-types";

const Feed: React.FC<PropsWithChildren> = ({ children }) => {
  const donationServiceInstance = new DonationService();
  const { fetchUser } = useAuth();
  const [donationsUser, setDonationsUser] = useState<IDonationDataWithUser[]>(
    []
  );
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    donationServiceInstance
      .getAllDonations()
      .then(async (response) => {
        const allDonations = [...response.data.donations];
        const donationsWithUser = await Promise.all(
          allDonations.map(async (donation) => {
            try {
              const userResponse = await fetchUser(donation.userId);
              return { ...donation, user: userResponse };
            } catch (error) {
              console.error("Failed to fetch user:", error);
              return { ...donation, user: null };
            }
          })
        );
        setDonationsUser(donationsWithUser);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch donations:", error);
        setIsLoading(false);
      });
  }, [updateTrigger]);

  const triggerUpdate = () => {
    setUpdateTrigger(!updateTrigger);
  };

  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {isLoading ? (
        <Layout
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Spinner />
        </Layout>
      ) : (
        <ListAccessoriesShowcase items={donationsUser} />
      )}
      {children}
      <Button onPress={triggerUpdate} style={{ margin: 10 }}>
        Refresh
      </Button>
    </Layout>
  );
};

export default Feed;
