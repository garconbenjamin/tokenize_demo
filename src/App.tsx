import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import {RootScreenType, RootStackParamList} from '@/types/navigators';
import Auth from '@/screens/Auth';
import TabNavigator from '@/navigators/Tab';
import {getUniqueId, getUserAgent} from 'react-native-device-info';
import {setConfig} from '@/store/actions';
const RootStack = createStackNavigator<RootStackParamList>();

function App() {
  useEffect(() => {
    const intializeConfig = async () => {
      const userAgent = await getUserAgent();
      const deviceId = await getUniqueId();
      setConfig({userAgent, deviceId});
    };
    intializeConfig();
  }, []);
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        id="Root">
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
