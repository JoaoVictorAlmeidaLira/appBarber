import React from 'react' ;
import { NavigationContainer } from '@react-navigation/native';
import UserContextsProvider from './src/contexts/UserContext'
import MainStack from './src/stacks/MainStack'

export default () => {
  return (
    <UserContextsProvider>
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </UserContextsProvider>
  );
}