import React from 'react';
import styled from 'styled-components/native';

export const HeaderArea = styled.View`
  width: 50%;
  height: 20%;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  z-index: 9999;
  height: 100%;
  width: 100%;

  justify-content: center;
  align-items: center;
`;

export const ScrollerContainer = styled.View`
  flex: 1;
  flex-direction: row;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
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
  margin-bottom: 15px;
  position: absolute;
  bottom: 0px;
`;
export const EditButtonArea = styled.TouchableOpacity`
  justify-self: center;
  align-self: center;
  flex-direction: row;
  width: 60%;
  height: 60px;
  border-radius: 30px;
  background-color: #5f2eea;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
export const RemoveButtonArea = styled.TouchableOpacity`
  justify-self: center;
  align-self: center;
  flex-direction: row;
  width: 60%;
  height: 60px;
  border-radius: 30px;
  background-color: #ed2e7e;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const CloseButtonArea = styled.TouchableOpacity`
  justify-self: center;
  align-self: center;
  flex-direction: row;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #ed2e7e;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const EditButtonText = styled.Text`
  margin-right: 5px;
  font-size: 18px;
  color: #fff;
`;

export const ListArea = styled.View`
  padding: 15px 0px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const ListItem = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  height: 50px;
  margin: 10px 0px;
  background-color: #fff;
  border-radius: 15px;
  padding: 0 15px;
  align-items: center;
  justify-content: center;
  border: 1px solid #5f2eea;
`;

export const ListItemText = styled.Text`
  flex: 1;
  margin-left: 15px;
  font-size: 20px;
  color: #5f2eea;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;
