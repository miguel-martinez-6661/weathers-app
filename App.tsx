import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, useColorScheme } from 'react-native';
import { theme } from './theme';
import { RootNavigator } from './navigation';

const App = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={theme[scheme]}>
      <StatusBar
        barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
