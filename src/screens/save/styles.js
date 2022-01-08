import React from 'react';
import styled from 'styled-components/native';

export const HeaderArea = styled.View`
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-bottom-color: #bca4ff;
  background-color: #eff0f6;
  border-bottom-width: 1px;
`;

export const MainContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const SaveContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  z-index: 9999;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  justify-content: center;
  align-items: center;
`;

export const SaveInputArea = styled.View`
  background-color: #fff;
  padding: 10px;
  border-radius: 15px;
`;

export const ScrollerContainer = styled.View`
  flex: 1;
  flex-direction: row;
  overflow: hidden;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const SaveButtonArea = styled.TouchableOpacity`
  justify-self: center;
  align-self: center;
  flex-direction: row;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #5f2eea;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 15px;
`;

export const CreateButtonArea = styled.TouchableOpacity`
  flex-direction: row;
  margin: auto;
  width: 200px;
  height: 60px;
  border-radius: 15px;
  background-color: #5f2eea;
  justify-content: center;
  align-items: center;
`;

export const EditButtonText = styled.Text`
  margin-right: 5px;
  font-size: 18px;
  color: #fff;
`;

export const SaveAreaText = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  font-size: 25px;
  color: #a0a3bd;
`;

export const SaveButtonText = styled.Text`
  margin-right: 5px;
  font-size: 18px;
  color: #fff;
`;

export const ListArea = styled.View`
  flex: 1;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20%;
`;

export const ListItem = styled.TouchableOpacity`
  width: 90%;
  height: 60px;
  flex-direction: row;
  margin: 10px 0px;
  background-color: #eff0f6;
  border-radius: 10px;
  padding: 0 15px;
  align-items: center;
  justify-content: center;
`;

export const ListItemText = styled.Text`
  flex: 1;
  margin-left: 15px;
  font-size: 16px;
  color: #14142b;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const LogoutButton = styled.TouchableOpacity`
  justify-self: center;
  align-self: center;
  flex-direction: row;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #ed2e7e;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const LogoText = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
`;
