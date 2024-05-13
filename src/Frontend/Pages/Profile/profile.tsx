import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Button,
} from "react-native";
import { Caption, Title, Surface, Card } from "react-native-paper";
import { useAuth } from "src/Frontend/Contexts/authContext";
import DonationService from "src/Frontend/Services/donation.service";
import { IDonationDataWithUser } from "src/Frontend/types/donation-types";
import { Share } from 'react-native';

type ProfileProps = {};

const Profile: React.FC<ProfileProps> = () => {
  const [acceptedDonations, setAcceptedDonations] = useState<
    IDonationDataWithUser[]
  >([]);

  const [donationsDone, setDonationsDone] = useState<IDonationDataWithUser[]>(
    []
  );

  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      const role = await AsyncStorage.getItem("role");
      console.log("🚀 ~ fetchUserRole ~ role:", role);
      setUserRole(role);
    };

    fetchUserRole();
  }, []);

  const { user, fetchUser } = useAuth();
  const donationService = new DonationService();
  const navigation = useNavigation();
  const fetchDonations = useCallback(async () => {
    try {
      const allDonationsResponse = await donationService.getAllDonations();
      if (allDonationsResponse.data.donations) {
        const filteredDonations = allDonationsResponse.data.donations.filter(
          (donation) => 
        donation.userId === user?.userId
        );
        const donationsWithUser = await Promise.all(
          filteredDonations.map(async (donation) => {
            try {
              const userResponse = await fetchUser(donation.userId);
              return { ...donation, user: userResponse };
            } catch (error) {
              console.error("Failed to fetch user for donation:", error);
              return { ...donation, user: null };
            }
          })
        );
        setAcceptedDonations(
          donationsWithUser.filter((donation) => !donation.active)
        );
        console.log(donationsWithUser, "dhnd");
        setDonationsDone(filteredDonations);
      }
    } catch (error) {
      console.error("Failed to fetch donations", error);
    }
  }, [user?.userId, fetchUser]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchDonations();
    }
  }, [isFocused, fetchDonations]);

  const onShare = async (donation) => {
    try {
      const result = await Share.share({
        message: `Check out this donation: ${donation.title} - ${donation.description}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type of', result.activityType);
        } else {
          console.log('Shared');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Dismissed');
      }
    } catch (error) {
      console.error('Error while sharing', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.contentContainer}>
          <View style={styles.profileContainer}>
            <View style={styles.textContainer}>
              <Title>{user?.name || "Name not available"}</Title>
              <Caption>{user?.email || "Email not available"}</Caption>
              <Caption>{user?.phone || "Phone not available"}</Caption>
            </View>
          </View>
          <Card style={styles.card}>
            <Card.Title title="Donation Summary" />
            <Card.Content>
              <View style={styles.row}>
                {userRole === "Donor" && (
                  <Text style={styles.column}>
                    Donations Done: {donationsDone.length}
                  </Text>
                )}
                <Text style={styles.column}>
                  Donations Accepted: {acceptedDonations.length}
                </Text>
              </View>
            </Card.Content>
          </Card>
          {userRole === "Donor" && (
            <Surface style={styles.bio}>
              <Title>Donations Done</Title>
              <FlatList
                data={donationsDone}
                renderItem={({ item }) => (
                  <View style={styles.donationItem}>
                    <Text style={styles.donationTitle}>{item.title}</Text>
                    <Text>{item.description}</Text>
                    <Button
                      title="View Details"
                      onPress={() =>
                        navigation.navigate("DonationDetail", {
                          donation: item,
                        })
                      }
                    />
                  </View>
                )}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={<Text>No donations done yet.</Text>}
              />
            </Surface>
          )}
          {userRole === "Volunteer" && (
            <Surface style={styles.bio}>
              <Title>Accepted Donations</Title>
              <FlatList
                data={acceptedDonations}
                renderItem={({ item }) => (
                  <View style={styles.donationItem}>
                    <Text style={styles.donationTitle}>{item.title}</Text>
                    <Text>{item.description}</Text>
                    <Button
                      title="View Details"
                      onPress={() =>
                        navigation.navigate("DonationDetail", {
                          donation: item,
                        })
                      }
                    />
                    <Button
                      title="Share"
                      onPress={() => onShare(item)}
                    />
                  </View>
                )}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={<Text>No donations accepted yet.</Text>}
              />
              <Button title="Refresh Donations" onPress={fetchDonations} />
            </Surface>
          )}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>❤️ from the CareShare team</Text>
        <Text style={styles.footerText}>Follow us on GitHub:</Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://github.com/kushxogitdev")}
        >
          kushxogit
        </Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://github.com/Lakshita2")}
        >
          Lakshita2
        </Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://github.com/Kunika06")}
        >
          Kunika06
        </Text>
      </View>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f8",
    padding: 20,
  },
  contentContainer: {
    flex: 1,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  textContainer: {
    alignItems: "center",
  },
  bio: {
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  donationItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  donationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  footer: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  footerText: {
    marginBottom: 5,
  },
  link: {
    color: "blue",
    marginBottom: 5,
  },
  card: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    marginRight: 20,
  },
});
