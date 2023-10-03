import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onRegisteredPressed = () => {
    console.warn('Sign In Hector');
  };

  const onForgotPasswordPressed = () => {
    console.warn('Forgot password');
  };

  const onSignInApple = () => {
    console.warn('Signed in with Apple');
  };
  const onSignInGoogle = () => {
    console.warn('Signed in with Google');
  };
  const onSignInFacebook = () => {
    console.warn('Signed in with Facebook');
  };

  const onSignUpPress = () => {
    console.warn('Create account');
  };
  const onTermsOfUse = () => {
    console.warn('Terms of Use pressed');
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
          placeholder="Repeat Password"
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
          and <Text style={styles.link}>Privacy Policy</Text>.
        </Text>

        <CustomButton
          text="Sign In with Apple"
          onPress={onSignInApple}
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
        <CustomButton
          text="Sign In with Google"
          onPress={onSignInGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          text="Sign In with Facebook"
          onPress={onSignInFacebook}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Create an account"
          onPress={onSignUpPress}
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
