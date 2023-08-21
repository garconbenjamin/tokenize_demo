import React from 'react';
import {useRoute} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

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
