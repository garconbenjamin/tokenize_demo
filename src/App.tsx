import React from 'react';
import '@/i18n';
import 'react-native-gesture-handler';
import {Provider as ReduxProvider} from 'react-redux';
import {ThemeProvider} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {RootScreenType, RootStackParamList} from '@/types/navigators';
import Auth from '@/screens/Auth';
import TabNavigator from '@/navigators/Tab';
import theme from '@/theme';
import store from '@/store';

const RootStack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <ReduxProvider store={store}>
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
    </ReduxProvider>
  );
}

export default App;
