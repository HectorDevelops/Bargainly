import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  const onRegisteredPressed = () => {
    navigation.navigate('ConfirmEmailScreen');
  };

  const haveAnAccountSignIn = () => {
    navigation.navigate('SignInScreen');
  };
  const onTermsOfUse = () => {
    console.warn('Terms of Use pressed');
  };

  const onPrivacyPolictyPress = () => {
    console.warn('Privacy Policy pressed');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Confirm Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton text="Register" onPress={onRegisteredPressed} />

        <Text style={styles.text}>
          By registering, you confirm thart you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUse}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPolictyPress}>
            Privacy Policy
          </Text>
          .
        </Text>

        <SocialSignInButtons />

        <CustomButton
          text="Have an account? Sign In"
          onPress={haveAnAccountSignIn}
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
