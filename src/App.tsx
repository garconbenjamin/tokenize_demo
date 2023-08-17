import React from 'react';
import '@/i18n';
import 'react-native-gesture-handler';
import {ThemeProvider} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {RootScreenType, RootStackParamList} from '@/types/navigators';
import Auth from '@/screens/Auth';
import TabNavigator from '@/navigators/Tab';
import theme from '@/theme';

const RootStack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
