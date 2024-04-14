import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PrimaryButton from 'src/Frontend/Components/Buttons/button.component';
import ButtonText from 'src/Frontend/Components/Buttons/button-text.component';
import { useNavigation } from '@react-navigation/native';
const YourComponent = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Heading Text */}
      <Text style={styles.heading}>Hi, Prakhar!</Text>

      {/* Line Space */}
     

      {/* More Bold Text */}
      <Text style={styles.boldText}>You're  all signed up</Text>
      <PrimaryButton fullWidth={true} style={{flex:1,marginTop:"40%"}}
      onPress={() => {
   
          navigation.navigate("DashBoard");
        
       
      }}
      >
      <ButtonText>Let's Go</ButtonText>
      </PrimaryButton>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  
  boldText: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingTop:20,
    paddingBottom:100,
  },
});

export default YourComponent;
