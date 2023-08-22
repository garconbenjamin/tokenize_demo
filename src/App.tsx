import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from '@/navigators/Tab';
import Auth from '@/screens/Auth';
import { RootScreenType, RootStackParamList } from '@/types/navigators';

const RootStack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        id="Root"
      >
        <RootStack.Screen
          name={RootScreenType.AUTHENTICATION}
          component={Auth}
        />
        <RootStack.Screen name={RootScreenType.MAIN} component={TabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
