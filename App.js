import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/stacks/MainStacks';

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
