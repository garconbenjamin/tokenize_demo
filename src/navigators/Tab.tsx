/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EmptyScreen from '@/screens/EmptyScreen';
import Markets from '@/screens/Markets';
import More from '@/screens/More';
import { TabScreenType, TabStackParamList } from '@/types/navigators';

import HomeIcon from '@/images/home_icon.svg';
import MarketsIcon from '@/images/markets_icon.svg';
import MoreIcon from '@/images/more_icon.svg';
import PortfolioIcon from '@/images/portfolio_icon.svg';
import WalletsIcon from '@/images/wallets_icon.svg';
import { colorPalette } from '@/theme';

const Tab = createBottomTabNavigator<TabStackParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colorPalette.blue2,
        tabBarActiveTintColor: colorPalette.blue3,
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontSize: 13,
          fontWeight: '500',
          lineHeight: 15,
        },
      }}
      initialRouteName={TabScreenType.MARKETS}
    >
      <Tab.Screen
        name={TabScreenType.HOME}
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon fill={color} />,
        }}
      />
      <Tab.Screen
        name={TabScreenType.MARKETS}
        component={Markets}
        options={{
          tabBarIcon: ({ color }) => <MarketsIcon stroke={color} />,
        }}
      />
      <Tab.Screen
        name={TabScreenType.WALLETS}
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => <WalletsIcon stroke={color} />,
        }}
      />
      <Tab.Screen
        name={TabScreenType.PORFOLIO}
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => <PortfolioIcon stroke={color} />,
        }}
      />
      <Tab.Screen
        name={TabScreenType.MORE}
        component={More}
        options={{
          tabBarIcon: ({ color }) => <MoreIcon stroke={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator;
