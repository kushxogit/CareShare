import React, { useState, useEffect } from "react";
import { Button, Layout, List, ListItem } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { IDonationData, IListItem } from "src/Frontend/types/donation-types";
import DonationService from "src/Frontend/Services/donation.service";
import AsyncStorage from '@react-native-async-storage/async-storage';

const donationService = new DonationService();

interface IListProps {
  items: IDonationData[];
}

export const ListAccessoriesShowcase: React.FC<IListProps> = ({
  items,
}): React.ReactElement => {
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      const role = await AsyncStorage.getItem('role');
      setUserRole(role);
    };

    fetchUserRole();
  }, []);

  // Function for handling item acceptance/rejection
  const handleItemAction = async (id: string) => {
    try {
      await donationService.softDeleteDonation(id);
      console.log(`Donation with ID ${id} has been successfully updated.`);
      // Optionally, refresh the list or show feedback to the user
    } catch (error) {
      console.error("Failed to update the donation:", error);
      // Handle error (e.g., show error message to the user)
    }
  };

  const renderItemAccessory = (id: string): React.ReactElement => (
    userRole !== 'Donor' ? (
      <Layout style={styles.buttonContainer}>
        <Button
          size="tiny"
          style={styles.acceptButton}
          onPress={() => handleItemAction(id)} // Use handleItemAction for accept
        >
          ACCEPT
        </Button>
        <Button
          size="tiny"
          style={styles.rejectButton}
          onPress={() => handleItemAction(id)} // Use handleItemAction for reject
        >
          REJECT
        </Button>
      </Layout>
    ) : <></> // Render nothing if user role is Donor
  );

  const renderItem = ({
    item,
    index,
  }: {
    item: IListItem;
    index: number;
  }): React.ReactElement => (
    <ListItem
      title={`${item.title}`}
      description={`${item.description}`}
      accessoryRight={() => renderItemAccessory(item.id)}
      style={styles.listItem}
    />
  );

  return (
    <List
      style={styles.container}
      data={items}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <Layout style={styles.separator} />}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "100%",
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
});
