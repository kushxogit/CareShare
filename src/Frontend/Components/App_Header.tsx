import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Badge, Surface, Title } from 'react-native-paper'
import { Feather } from '@expo/vector-icons';
// import Colors from '../constants/Colors';

const IconSize = 24;

const AppHeader = ({ menu, back, title, right, rightFunction, optionalIcon, optionalFunc, navigation, headerBg, iconColor, titleAlight, optionalBadge }) => {
    return (
        <Surface style={[styles.header, { height: 260, backgroundColor: headerBg }]}>
            <View style={styles.titleView}>
                <Title style={{ color: iconColor, textAlign: 'center',fontSize:22,marginTop:10,justifyContent:'center' ,marginLeft:30}}>{title}</Title>
            </View>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: "#FAAE2B" }]}
                onPress={() => navigation.navigate("LogIn")}
            >
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </Surface>
    )
}


export default AppHeader

const styles = StyleSheet.create({
    header: {
        
        elevation: 4,
        justifyContent: 'space-between',
        // alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: "black",
    },
    view: {
        margin: 10,
        
        flexDirection: 'row',
      
    },
    titleView:{
        flex: 1,
    },
    rightView: {
        justifyContent: 'flex-end',
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    button: {
        marginTop:10,
        flexDirection: "row",
   
        justifyContent: "center",
        borderRadius: 10,
        
      },
      buttonText: {
        
        fontSize: 22,
        
        color: "#ffffff",
      },
})