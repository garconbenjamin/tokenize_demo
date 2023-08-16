import React from 'react';
import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {RootScreenType, RootStackParamList} from '@/types/navigators';
import Auth from '@/screens/Auth';
import TabNavigator from '@/navigators/Tab';

const RootStack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
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
          <RootStack.Screen
            name={RootScreenType.MAIN}
            component={TabNavigator}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

export default App;
