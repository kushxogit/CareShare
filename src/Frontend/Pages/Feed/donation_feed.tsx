import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
  StyleSheet,
} from "react-native";
import { Card, Layout, Button } from "@ui-kitten/components";
import { IDonationDataWithUser } from "src/Frontend/types/donation-types";
import Icon from "react-native-vector-icons/MaterialIcons";
import { showToastSuccess } from "src/Frontend/Components/toast";
import DonationService from "src/Frontend/Services/donation.service";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const donationService = new DonationService();

interface DonationDetailProps {
  route: {
    params: {
      donation: IDonationDataWithUser;
    };
  };
}

const DonationDetail: React.FC<DonationDetailProps> = ({ route }) => {
  const navigation = useNavigation();
  const { donation } = route.params;
  console.log("🚀 ~ donation:", donation);
  const [userRole, setUserRole] = useState<string | null>(null);
  useEffect(() => {
    const fetchUserRole = async () => {
      const role = await AsyncStorage.getItem("role");
      setUserRole(role);
    };

    fetchUserRole();
  }, []);

  const handleCall = () => {
    const url = `tel:${donation.user.user.phone}`;
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        showToastSuccess("Cannot open dialer, try messaging");
      }
    });
  };

  const handleMessage = () => {
    const smsUrl = `sms:${donation.user.user.phone}`;
    Linking.canOpenURL(smsUrl).then((supported) => {
      if (supported) {
        Linking.openURL(smsUrl);
      } else {
        showToastSuccess("Cannot open messaging");
      }
    });
  };

  const handleAccept = async () => {
    try {
      await donationService.softDeleteDonation(donation.id);
      Alert.alert("Accept", "You have accepted the donation.");
      navigation.navigate("Feed Page");
    } catch (error) {
      console.error("Failed to accept the donation:", error);
    }
  };

  const handleReject = async () => {
    try {
      await donationService.softDeleteDonation(donation.id);
      navigation.navigate("Feed Page");
      Alert.alert("Reject", "You have rejected the donation.");
    } catch (error) {
      console.error("Failed to reject the donation:", error);
    }
  };

  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Layout style={{ marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
          <Card>
            <View style={styles.contactContainer}>
              <Text>Name: {donation?.user?.user?.name}</Text>
              {userRole !== "Donor" ? (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Text>Phone: {donation.user.user.phone}</Text>
                  <View style={{ flexDirection: "row", gap: "16px" }}>
                    <TouchableOpacity onPress={handleCall}>
                      <Icon name="phone" size={24} color="green" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleMessage}>
                      <Icon name="message" size={24} color="green" />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : null}
            </View>
          </Card>
          <Card>
            <Text>Title</Text>
            <Text>{donation.title}</Text>
          </Card>
          <Card>
            <Text>Description</Text>
            <Text>{donation.description}</Text>
          </Card>
          <Card>
            <Text>Pickup Times</Text>
            <Text>{donation.pickupTimes}</Text>
          </Card>
          <Card>
            <Text>Location</Text>
            <Text>{`${donation.location.street}, ${donation.location.city}, ${donation.location.state}, ${donation.location.zipCode}`}</Text>
          </Card>
          <Card>
            <Text>For</Text>
            <Text>{donation.for}</Text>
          </Card>
        </Layout>
      </ScrollView>
      {userRole !== "Donor" && donation.active ? (
        <View style={styles.actionContainer}>
          <Button onPress={handleAccept} style={styles.acceptButton}>
            <Icon name="check" color="white" />
          </Button>
          <Button onPress={handleReject} style={styles.rejectButton}>
            <Icon name="close" color="white" />
          </Button>
        </View>
      ) : null}
    </Layout>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
  },
  acceptButton: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
    width: "48%",
    height: "auto",
  },
  rejectButton: {
    backgroundColor: "#F44336",
    borderColor: "#F44336",
    width: "48%",
    height: "auto",
  },
});

export default DonationDetail;
