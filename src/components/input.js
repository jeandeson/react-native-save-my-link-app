import React from 'react';
import styled from 'styled-components/native';
// import EmailIcon from '../assets/email.svg';

const InputArea = styled.View`
  width: 90%;
  height: 60px;
  background-color: #fcfcfc;
  flex-direction: row;
  border-radius: 10px;
  align-items: center;
  border: 2px solid #a0a3bd;
  padding-left: 10px;
  margin-bottom: 15px;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #14142b;
`;

const LinkInput = ({Icon, placeholder, onChangeText, name, value}) => {
  return (
    <InputArea>
      {Icon}
      <Input
        autoCapitalize="none"
        onChangeText={text => onChangeText(name, text)}
        placeholder={placeholder}
        value={value}
      />
    </InputArea>
  );
};

export default LinkInput;
