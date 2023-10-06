import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [code, setCode] = useState('');

  const onConfirmedPressed = () => {
    navigation.navigate('HomeScreen');
  };

  const onSignedInPressed = () => {
    navigation.navigate('SignInScreen');
  };
  const onResendPressed = () => {
    console.warn('Resend Code pressed');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput
          placeholder="Enter your confirmation Code"
          value={code}
          setValue={setCode}
        />

        {/* Primary Button */}
        <CustomButton text="Confirm" onPress={onConfirmedPressed} />

        {/* Secondary Button */}
        <CustomButton
          text="Resend Code"
          onPress={onResendPressed}
          type="SECONDARY"
        />
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

export default SignUpScreen;
