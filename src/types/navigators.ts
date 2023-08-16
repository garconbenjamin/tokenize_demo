import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import type {NavigatorScreenParams} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

// #region Tab navigation

enum TabScreenType {
  HOME = 'home',
  MARKETS = 'markets',
  PORFOLIO = 'porfolio',
  WALLETS = 'wallets',
  MORE = 'more',
}

type TabStackParamList = {
  [TabScreenType.HOME]: undefined;
  [TabScreenType.MARKETS]: undefined;
  [TabScreenType.PORFOLIO]: undefined;
  [TabScreenType.WALLETS]: undefined;
  [TabScreenType.MORE]: undefined;
};

type TabScreenProps = BottomTabNavigationProp<
  TabStackParamList,
  keyof TabStackParamList,
  'TabMain'
>;

// #endregion

// #region Root navigation

enum RootScreenType {
  AUTHENTICATION = 'authentication',
  MAIN = 'main',
}

type RootStackParamList = {
  [RootScreenType.AUTHENTICATION]: undefined;
  [RootScreenType.MAIN]?: NavigatorScreenParams<TabStackParamList>;
};

type RootScreenProps = StackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList,
  'Root'
>;

// #endregion

export {RootScreenType, TabScreenType};

export type {
  RootStackParamList,
  RootScreenProps,
  TabStackParamList,
  TabScreenProps,
};
