import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');

  const onSendPressed = () => {
    console.warn('Confirmed Code');
    navigation.navigate('SignInScreen');
  };

  const onSignedInPressed = () => {
    console.warn('Going back to Signing In');
    navigation.navigate('SignInScreen');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

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
