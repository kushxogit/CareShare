import React, { PropsWithChildren, useEffect, useState } from "react";
import { Layout, Spinner, Button } from "@ui-kitten/components";
import { ListAccessoriesShowcase } from "src/Frontend/Components/List/list";
import { IDonationData } from "src/Frontend/types/donation-types";
import DonationService from "src/Frontend/Services/donation.service";

const Feed: React.FC<PropsWithChildren> = ({ children }) => {
  const donationServiceInstance = new DonationService();

  const [donations, setDonations] = useState<IDonationData[]>([]);
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const updateDonations = (newDonations: IDonationData[]) => {
    setIsLoading(true);
    setDonations(newDonations);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    donationServiceInstance
      .getAllDonations()
      .then((response) => {
        setTimeout(() => {
          const allDonations = [...response.data.donations];
          updateDonations(allDonations);
        }, 1000);
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
        <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center", height:'100%'}}>
          <Spinner />
        </Layout>
      ) : (
        <ListAccessoriesShowcase items={donations} />
      )}
      {children}
      <Button onPress={triggerUpdate} style={{ margin: 10 }}>
        Refresh
      </Button>
    </Layout>
  );
};

export default Feed;
