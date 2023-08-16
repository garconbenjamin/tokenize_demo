import React from 'react';
import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import Home from '@/screens/Home';

function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Home />
    </ApplicationProvider>
  );
}

export default App;
