import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';

const EmptyScreen = () => {
  const route = useRoute();

  return (
    <View>
      <SafeAreaView>
        <Text>{route.name}</Text>
      </SafeAreaView>
    </View>
  );
};
export default EmptyScreen;
