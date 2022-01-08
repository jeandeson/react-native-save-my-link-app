import React, {useEffect} from 'react';
import {Text, Container, LoadingIcon} from './styles';
import Logo from '../../assets/Logo.svg';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();
  useEffect(() => {
    async function tokenValidation() {
      const token = await AsyncStorage.getItem('jwt-savemylink');
      if (!token) {
        navigation.reset({
          routes: [{name: 'SignIn'}],
        });
      } else {
        navigation.reset({
          routes: [{name: 'Save'}],
        });
      }
    }
    tokenValidation();
  }, []);
  return (
    <Container>
      <Logo width={100} height={100} fill="#5F2EEA" />
      <Text>Save My Link</Text>
      <LoadingIcon size="large" color="#ed2e7e" />
    </Container>
  );
};
