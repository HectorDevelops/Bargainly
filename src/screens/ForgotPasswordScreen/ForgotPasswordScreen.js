import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  // Creating the navigation prop to navigate to different screens within the app
  const navigation = useNavigation();
  const [username, setUsername] = useState('');

  // When creating an event, navigation prop will route to Sign In
  const onSendPressed = () => {
    navigation.navigate('SignInScreen');
  };

  const onSignedInPressed = () => {
    navigation.navigate('SignInScreen');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>
        {/* The Custom Inputs below will collect the state variable value inputted by user and set it as its new data  */}
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        {/* Creating these Custom Buttons to trigger event and re-direct to new screen.  */}
        {/* Primary Button */}
        <CustomButton text="Send" onPress={onSendPressed} />

        {/* Tertiary Button */}
        <CustomButton
          text="Back to Sign In"
          onPress={onSignedInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '90%',
    maxWidth: 500,
    maxHeight: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 5,
  },
  link: {
    color: 'orange',
  },
});

export default ForgotPasswordScreen;
