import React, {useState} from 'react';
import SignInput from '../../components/SignInput';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import Logo from '../../assets/Logo.svg';

import {useNavigation} from '@react-navigation/native';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

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

  const handleSignUp = async () => {
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(userCredential => {
        const user = userCredential.user;
        if (user) {
          alert('Registrado com sucesso');
          navigation.navigate('SignIn');
        }
      })
      .catch(error => {
        console.log(error);
        setErrosOnform('Error ao fazer registro ' + error.message);
      });
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
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
        <CustomButton onPress={handleSignUp}>
          <CustomButtonText>Registrar</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça login!</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
