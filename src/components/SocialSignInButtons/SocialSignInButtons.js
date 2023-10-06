import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButtons = () => {
  const onSignInApple = () => {
    console.warn('Continue with Apple');
  };
  const onSignInGoogle = () => {
    console.warn('Continue with Google');
  };
  const onSignInFacebook = () => {
    console.warn('Continue with Facebook');
  };

  return (
    <>
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
    </>
  );
};

export default SocialSignInButtons;
