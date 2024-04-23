import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Share,
} from "react-native";
import { Surface, Title, Paragraph, Caption } from "react-native-paper";
import DonationService from "src/Frontend/Services/donation.service";
import { useAuth } from "../../Contexts/authContext";
import { IDonationData } from "src/Frontend/types/donation-types";

type Donation = {
  id: string;
  title: string;
  description: string;
  for: string; // Added for charity
  pickupTimes: string;
  userId: string;
};

type EngagementProps = {
  donations: Donation[];
};

const Engagement: React.FC<EngagementProps> = ({
  donations: initialDonations,
}) => {
  const [donations, setDonations] = useState<IDonationData[] | Donation[]>(
    initialDonations
  );
  const useDonationService = new DonationService();
  const { user } = useAuth();

  const fetchDonations = useCallback(async () => {
    console.log("🚀 ~ donations:", donations);
    try {
      console.log(user.userId);
      const response = await useDonationService.getAllDonationsForUser(
        user.userId
      );
      if (response && response.data && response.data.donations) {
        setDonations(response.data.donations);
      }
    } catch (error) {
      console.error("Failed to fetch donations", error);
    }
  }, []);

  useEffect(() => {
    fetchDonations();
  }, [fetchDonations]);

  const shareDonations = async () => {
    try {
      const donationTitles = donations
        .map((donation) => donation.title)
        .join(", ");
      await Share.share({
        message: `Here are the donations I've created: ${donationTitles}`,
      });
    } catch (error) {
      console.error("Error sharing donations: ", error);
    }
  };

  return (
    <Surface style={styles.container}>
      <Title style={styles.title}>My Donations</Title>
      <ScrollView style={styles.scrollView}>
        {donations?.length > 0 ? (
          donations.map((item) => (
            <Surface key={item.id} style={styles.donationItem}>
              <Text style={styles.donationTitle}>{item.title}</Text>
              <Caption style={styles.donationDescription}>
                Description: {item.description}
              </Caption>
              <Paragraph>For: {item.for}</Paragraph>
              <Paragraph>Pickup Times: {item.pickupTimes}</Paragraph>
            </Surface>
          ))
        ) : (
          <Text style={styles.emptyMessage}>
            No donations available. Press "Refresh Donations" to load donations.
          </Text>
        )}
      </ScrollView>
      <Button
        title="Share My Donations"
        onPress={shareDonations}
        disabled={donations?.length === 0}
      />
      <Button title="Refresh Donations" onPress={fetchDonations} />
    </Surface>
  );
};

export default Engagement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    margin: 16,
    borderRadius: 10,
  },
  title: {
    marginBottom: 10,
  },
  scrollView: {
    marginBottom: 10,
  },
  donationItem: {
    padding: 10,
    marginBottom: 10,
    elevation: 1, // Adds shadow for Android
    shadowColor: "#000", // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  donationTitle: {
    fontWeight: "bold",
  },
  donationDescription: {
    marginTop: 5,
  },
  emptyMessage: {
    textAlign: "center",
    marginTop: 20,
  },
});
