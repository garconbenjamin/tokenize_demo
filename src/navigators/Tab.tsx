import React from 'react';
import Markets from '@/screens/Markets';
import EmptyScreen from '@/screens/EmptyScreen';
import {TabStackParamList, TabScreenType} from '@/types/navigators';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<TabStackParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={TabScreenType.MARKETS}>
      <Tab.Screen name={TabScreenType.HOME} component={EmptyScreen} />
      <Tab.Screen name={TabScreenType.MARKETS} component={Markets} />
      <Tab.Screen name={TabScreenType.WALLETS} component={EmptyScreen} />
      <Tab.Screen name={TabScreenType.PORFOLIO} component={EmptyScreen} />
      <Tab.Screen name={TabScreenType.MORE} component={EmptyScreen} />
    </Tab.Navigator>
  );
}
export default TabNavigator;
