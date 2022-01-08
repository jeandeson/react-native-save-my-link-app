import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #5f2eea;
`;

export const LoadingIcon = styled.ActivityIndicator`
  color: #fff;
  margin-top: 50px;
`;
