import React from 'react';
import styled from 'styled-components/native';
// import EmailIcon from '../assets/email.svg';

const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: #fff;
  border: 2px solid #5f2eea;
  flex-direction: row;
  border-radius: 15px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #14142b;
  margin-left: 10px;
`;

const SignInput = ({
  Icon,
  placeholder,
  onChangeText,
  name,
  value,
  password,
}) => {
  return (
    <InputArea>
      {Icon}
      <Input
        autoCapitalize="none"
        onChangeText={text => onChangeText(name, text)}
        placeholder={placeholder}
        value={value}
        secureTextEntry={password}
      />
    </InputArea>
  );
};

export default SignInput;
