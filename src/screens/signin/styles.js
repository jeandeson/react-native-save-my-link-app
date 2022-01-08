import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
  heigth: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #5f2eea;
  flex-direction: row;
  border-radius: 15px;
  padding-left: 15px;
  margin-bottom: 15px;
`;

export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: #14142b;
`;

export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #14142b;
  margin-left: 5px;
`;

export const SignMessageButtonTextDanger = styled.Text`
  font-size: 16px;
  color: red;
  margin-left: 5px;
`;

export const LogoText = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #5f2eea;
`;
