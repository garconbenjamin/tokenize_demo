import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Layout, Text} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native-safe-area-context';

const EmptyScreen = () => {
  const route = useRoute();

  return (
    <Layout>
      <SafeAreaView>
        <Text>{route.name}</Text>
      </SafeAreaView>
    </Layout>
  );
};
export default EmptyScreen;
