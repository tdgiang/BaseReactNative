import React from 'react';
import {View, Text} from 'react-native';
import Block from '../../components/Block';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {HOMESCREEN} from '../../routers/ScreenNames';

const LoginView = (props) => {
  const navigation = useNavigation();

  return (
    <Block center middle>
      <Text>Login View</Text>
      <Button onPress={() => navigation.push(HOMESCREEN)}>
        <Text> Go to Home</Text>
      </Button>
    </Block>
  );
};

export default LoginView;
