import React, { useState, useEffect } from "react";
import { Button, Layout, List, ListItem, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import {
  IDonationDataWithUser,
} from "src/Frontend/types/donation-types";
import DonationService from "src/Frontend/Services/donation.service";
import AuthService from "src/Frontend/Services/auth.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "src/Frontend/Contexts/authContext";
import { User } from "src/Frontend/types/user-types";

const donationService = new DonationService();
const authService = new AuthService();

interface IListProps {
  items: IDonationDataWithUser[];
}

export const ListAccessoriesShowcase: React.FC<IListProps> = ({
  items,
}): React.ReactElement => {
  const { user, fetchUser } = useAuth();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      if (user?.userId) {
        const fetchedUser = await fetchUser(user.userId);
        setCurrentUser(fetchedUser);
      }
      const role = await AsyncStorage.getItem("role");
      setUserRole(role);
    };

    fetchCurrentUser();
  }, [user?.userId, fetchUser]);

  const handleItemAction = async (id: string, action: "accept" | "reject") => {
    try {
      if (action === "accept") {
        await donationService.softDeleteDonation(id);
      } else if (action === "reject") {
        await authService.ignoreDonation(id);
      }
      console.log(`Donation with ID ${id} has been successfully ${action}ed.`);
    } catch (error) {
      console.error(`Failed to ${action} the donation:`, error);
    }
  };

  const renderItemAccessory = (id: string): React.ReactElement =>
    userRole !== "Donor" ? (
      <Layout style={styles.buttonContainer}>
        <Button
          size="tiny"
          style={styles.acceptButton}
          onPress={() => handleItemAction(id, "accept")}
        >
          ACCEPT
        </Button>
        <Button
          size="tiny"
          style={styles.rejectButton}
          onPress={() => handleItemAction(id, "reject")}
        >
          REJECT
        </Button>
      </Layout>
    ) : (
      <></>
    );

  const renderItem = ({
    item,
  }: {
    item: IDonationDataWithUser;
    index: number;
  }): React.ReactElement => {
    const isIgnored = currentUser?.user?.ignoredDonations?.includes(item.id);
    const currentTime = Date.now();
    const createdAtTime = new Date(item.createdAt).getTime();
    const expiryDuration = item.expiry * 1000 * 60 * 60 * 24;
    const isExpired = currentTime - createdAtTime > expiryDuration;

    if (!isIgnored && !isExpired) {
      return (
        <ListItem
          title={`${item.title}`}
          description={`${item.description}\nBy:${item?.user?.user?.name}`}
          accessoryRight={() => (
            <Layout style={styles.accessoryContainer}>
              {renderItemAccessory(item.id)}
            </Layout>
          )}
          style={styles.listItem}
          onPress={() =>
            navigation.navigate("DonationDetail", { donation: item })
          }
        />
      );
    } else {
      return <></>;
    }
  };

  const activeItems = items.filter((item) => item.active !== false);

  return (
    <>
      <Text style={[styles.headerText, { textAlign: "left", width: "100%" }]}>
        {userRole !== "Volunteer" ? "Users are donating..." : "Donations"}
      </Text>
      <List
        style={styles.container}
        data={activeItems}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Layout style={styles.separator} />}
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "100%",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    color: "#000",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  acceptButton: {
    backgroundColor: "#FAAE2B",
    borderColor: "#FAAE2B",
    marginRight: 8,
  },
  rejectButton: {
    backgroundColor: "red",
    borderColor: "red",
  },
  listItem: {
    minHeight: 32,
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#e0e0e0",
  },
  separator: {
    height: 0,
    backgroundColor: "transparent",
  },
  accessoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  userNameStyle: {
    marginRight: 10,
    color: "gray",
  },
});
