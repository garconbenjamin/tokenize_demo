import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import { clearUser } from '@/store/actions';
import { RootScreenProps, RootScreenType } from '@/types/navigators';

function More() {
  const navigation = useNavigation<RootScreenProps>();
  const handleSignOut = () => {
    clearUser();
    navigation.reset({
      index: 0,
      routes: [{ name: RootScreenType.AUTHENTICATION }],
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>More</Text>
      <Button onPress={handleSignOut}>Sign out</Button>
    </SafeAreaView>
  );
}

export default More;
