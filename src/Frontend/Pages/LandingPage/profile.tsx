import React, {  useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput,ScrollView } from 'react-native'
import AppHeader from 'src/Frontend/Components/App_Header'


import {Entypo} from '@expo/vector-icons'
import { Caption, Paragraph, Surface, Title } from 'react-native-paper'

import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';





const dummy_text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const Profile = ({ navigation, route }) => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        // Load the default image when the component mounts
        const loadDefaultImage = async () => {
            const defaultImage = require('');
            setProfile(defaultImage);
        };

        loadDefaultImage();
    }, []);

    const imagePick = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        setProfile(result.uri);
        console.log("Profile URI:", profile);
    };

    return (
        <ScrollView style={styles.container}>
            <AppHeader
                title={route.name} headerBg={"#FAAE2B"} iconColor={"#ffffff"}
                menu titleAlight="center" optionalBadge={5} navigation={navigation}
                right="more-vertical" rightFunction={() => console.log('right')}
                optionalIcon="bell" optionalFunc={() => console.log('optional')}
            />
            <View style={styles.profileContainer}>
                <View style={styles.imgContainer}>
                    <Image style={styles.image} source={profile ? { uri: profile } : require('')} />
                    <TouchableOpacity onPress={imagePick}
                        style={{ alignItems: 'flex-end', top: -10 }}>
                        <Entypo name="pencil" size={20} color={"fffffff"} />
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <Title>Vishal Pawar</Title>
                    <Caption>github/vishalpwr</Caption>
                </View>
            </View>
            <View style={styles.userInfo}>
                <Surface style={styles.bio}>
                    <Title>Bio</Title>
                    <Paragraph numberOfLines={4}>{dummy_text}</Paragraph>
                </Surface>
                <Surface style={styles.bio}>
                    <Title>Notes</Title>
                    <TextInput
                        placeholder="write here"
                        underlineColorAndroid={"green"}
                    />
                </Surface>
            </View>
        </ScrollView>
    )
}
export default Profile
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-15%' ,
        // height:"100%"
    },
    imgContainer: {
        
    },
    textContainer: {
        alignItems: 'center',
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderColor: "black",
        borderWidth: 3,
        paddingTop:0,
    },
    userInfo: {
        flex: 1,
    },
    bio: {
        borderRadius: 10,
        padding: 16,
        margin: 16
    }
})
