import React, {useState} from 'react';
import LogoLink from '../../assets/LogoLInk.svg';
import SignInput from '../../components/SignInput';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import Logo from '../../assets/Logo.svg';
import {useNavigation} from '@react-navigation/native';

import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  SignMessageButtonTextDanger,
  LogoText,
} from './styles';

export default () => {
  const auth = getAuth();
  const navigation = useNavigation();
  const [form, setForm] = useState({email: '', password: ''});
  const [errorsOnform, setErrosOnform] = useState(null);

  const onChangeText = (name, value) => {
    setForm({...form, [name]: value});
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };

  const handleLogin = async () => {
    if (form.email && form.password) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          form.email,
          form.password,
        );
        const {stsTokenManager} = userCredential.user;
        const {uid} = userCredential.user;
        if (stsTokenManager) {
          await AsyncStorage.setItem(
            'jwt-savemylink',
            stsTokenManager.accessToken,
          );
          await AsyncStorage.setItem('userId', uid);
          navigation.reset({routes: [{name: 'Save'}]});
        }
      } catch (error) {
        setErrosOnform('Email ou senha inválidos, tente novamente!');
      }
    }
  };

  return (
    <Container>
      <Logo width={100} height={100} fill="#5F2EEA" />
      <LogoText>Save My Link</LogoText>
      <InputArea>
        {errorsOnform && (
          <SignMessageButton onPress={handleMessageButtonClick}>
            <SignMessageButtonTextDanger>
              {errorsOnform}
            </SignMessageButtonTextDanger>
          </SignMessageButton>
        )}
        <SignInput
          onChangeText={onChangeText}
          value={form.email}
          name="email"
          Icon={<EmailIcon width="24" height="24" fill="#6E7191" />}
          placeholder="Digite seu email"
        />
        <SignInput
          onChangeText={onChangeText}
          value={form.password}
          name="password"
          Icon={<LockIcon width="24" height="24" fill="#6E7191" />}
          placeholder="Digite sua password"
          password={true}
        />
        <CustomButton onPress={handleLogin}>
          <CustomButtonText>Logar</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Não possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Registre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
