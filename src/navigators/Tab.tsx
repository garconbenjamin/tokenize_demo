/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Markets from '@/screens/Markets';
import EmptyScreen from '@/screens/EmptyScreen';
import {TabStackParamList, TabScreenType} from '@/types/navigators';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '@/images/home_icon.svg';
import MarketsIcon from '@/images/markets_icon.svg';
import WalletsIcon from '@/images/wallets_icon.svg';
import PortfolioIcon from '@/images/portfolio_icon.svg';
import MoreIcon from '@/images/more_icon.svg';

const Tab = createBottomTabNavigator<TabStackParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: '#9194BB',
        tabBarActiveTintColor: '#6081FA',
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontSize: 13,
          fontWeight: '500',
          lineHeight: 15,
        },
      }}
      initialRouteName={TabScreenType.MARKETS}>
      <Tab.Screen
        name={TabScreenType.HOME}
        component={EmptyScreen}
        options={{
          tabBarIcon: ({color}) => <HomeIcon fill={color} />,
        }}
      />
      <Tab.Screen
        name={TabScreenType.MARKETS}
        component={Markets}
        options={{
          tabBarIcon: ({color}) => <MarketsIcon stroke={color} />,
        }}
      />
      <Tab.Screen
        name={TabScreenType.WALLETS}
        component={EmptyScreen}
        options={{
          tabBarIcon: ({color}) => <WalletsIcon stroke={color} />,
        }}
      />
      <Tab.Screen
        name={TabScreenType.PORFOLIO}
        component={EmptyScreen}
        options={{
          tabBarIcon: ({color}) => <PortfolioIcon stroke={color} />,
        }}
      />
      <Tab.Screen
        name={TabScreenType.MORE}
        component={EmptyScreen}
        options={{
          tabBarIcon: ({color}) => <MoreIcon stroke={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator;
