/**
 * @format
 */
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import {AppRegistry} from 'react-native';
import App from '@/App';
import {name as appName} from './app.json';
import React from 'react';
import '@/i18n';
import {Provider as ReduxProvider} from 'react-redux';
import {ThemeProvider} from '@rneui/themed';
import 'react-native-gesture-handler';
import theme from '@/theme';
import store from '@/store';

function Root() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ReduxProvider>
  );
}

AppRegistry.registerComponent(appName, () => Root);
