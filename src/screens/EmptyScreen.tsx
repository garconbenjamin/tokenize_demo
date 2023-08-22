import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { Text } from '@rneui/themed';

const EmptyScreen = () => {
  const route = useRoute();

  return (
    <SafeAreaView
      style={{
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <Text h1>{route.name}</Text>
    </SafeAreaView>
  );
};
export default EmptyScreen;
