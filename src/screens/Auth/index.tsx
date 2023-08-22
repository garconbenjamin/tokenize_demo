import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import { Text } from '@rneui/themed';
import LoginForm from './LoginForm';

import bg from '@/images/bg.png';
import Logo from '@/images/logo.svg';
import { colorPalette } from '@/theme';

function Auth() {
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={{ flex: 1, width: '100%' }} source={bg}>
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              width: '100%',
              paddingHorizontal: 10,
              paddingTop: 55,
            }}
          >
            <Logo fill="white" style={{ marginBottom: 24 }} />
            <Text
              h1
              style={{
                color: 'white',
                marginBottom: 9,
              }}
            >
              {t('sign_in')}
            </Text>
            <Text
              style={{
                color: colorPalette.extraLightBody,
                fontSize: 16,
                marginBottom: 60,
              }}
            >
              {t('signIn.sing_in_note')}
            </Text>
            <LoginForm />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
export default Auth;
