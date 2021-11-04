import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
import NavigationConstants from '../constants/NavigationConstants';
import Home from '../screens/Home';
import SearchResult from '../screens/SearchResult';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator initialRouteName={NavigationConstants.home}>
      <Stack.Screen
        name={NavigationConstants.home}
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NavigationConstants.results}
        component={SearchResult}
        options={{
          headerTintColor: colors.textOnPrimary,
          headerStyle: {
            backgroundColor: colors.primary,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
