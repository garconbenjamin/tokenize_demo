import React from 'react';
import {Button} from '@ui-kitten/components';
import {Layout, Text} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {RootScreenProps, RootScreenType} from '@/types/navigators';
const HomeScreen = () => {
  const navigation = useNavigation<RootScreenProps>();
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">Auth</Text>
      <Button
        onPress={() => {
          navigation.replace(RootScreenType.MAIN);
        }}>
        Test
      </Button>
    </Layout>
  );
};
export default HomeScreen;
