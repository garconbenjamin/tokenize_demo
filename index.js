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
import {getUniqueId, getUserAgent} from 'react-native-device-info';
import {setConfig} from '@/store/actions';
function Root() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ReduxProvider>
  );
}

const runApp = async initialProps => {
  try {
    const userAgent = await getUserAgent();
    const deviceId = await getUniqueId();
    setConfig({userAgent, deviceId});

    AppRegistry.registerComponent(appName, () => Root);
    AppRegistry.runApplication(appName, initialProps);
  } catch (err) {
    console.log(err);
  }
};

AppRegistry.registerRunnable(appName, runApp);
