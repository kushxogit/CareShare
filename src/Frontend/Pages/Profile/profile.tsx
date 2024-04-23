import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, TextInput } from "react-native";
import { Caption, Paragraph, Surface, Title, Button } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from "src/Frontend/Contexts/authContext";

type ProfileProps = {
  acceptedDonations: Array<{
    id: string;
    title: string;
    description: string;
  }>;
};

const Profile: React.FC<ProfileProps> = ({ acceptedDonations }) => {
  const [role, setRole] = useState<string | null>(null);
  const [isEditingBio, setIsEditingBio] = useState<boolean>(false);
  const [bio, setBio] = useState<string>('Your bio here...');
  const { user } = useAuth();

  useEffect(() => {
    const fetchRole = async () => {
      const storedRole = await AsyncStorage.getItem('role');
      setRole(storedRole);
    };

    fetchRole();
  }, []);

  const handleBioChange = (text: string) => {
    setBio(text);
  };

  const toggleEditBio = () => {
    setIsEditingBio(!isEditingBio);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.textContainer}>
          <Title>{user?.name || "Name not available"}</Title>
          <Caption>{user?.email || "Email not available"}</Caption>
        </View>
      </View>
      <View style={styles.userInfo}>
        <Surface style={styles.bio}>
          <Title>Bio</Title>
          {isEditingBio ? (
            <>
              <TextInput
                multiline
                value={bio}
                onChangeText={handleBioChange}
                style={styles.bioInput}
              />
              <Button onPress={toggleEditBio}>Save Bio</Button>
            </>
          ) : (
            <>
              <Paragraph numberOfLines={4}>{bio}</Paragraph>
              <Button onPress={toggleEditBio}>Edit Bio</Button>
            </>
          )}
        </Surface>
        {role === 'volunteer' && (
          <Surface style={styles.bio}>
            <Title>Accepted Donations</Title>
            <FlatList
              data={acceptedDonations}
              renderItem={({ item }) => (
                <View style={styles.donationItem}>
                  <Text style={styles.donationTitle}>{item.title}</Text>
                  <Text>{item.description}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </Surface>
        )}
      </View>
    </ScrollView>
  );
};
export default Profile;

const styles = StyleSheet.create({
  bioInput: {
    minHeight: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});
