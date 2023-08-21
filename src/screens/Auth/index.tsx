import React from 'react';
import {useTranslation} from 'react-i18next';
import {ImageBackground, Pressable, View, StyleSheet} from 'react-native';
import bg from '@/images/bg.png';
import {SafeAreaView} from 'react-native';
import {Text} from '@rneui/themed';
import Logo from '@/images/logo.svg';
import LoginForm from './LoginForm';

function Auth() {
  const {t} = useTranslation();

  return (
    <View style={{flex: 1}}>
      <ImageBackground style={{flex: 1, width: '100%'}} source={bg}>
        <SafeAreaView style={{flex: 1}}>
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              width: '100%',
              paddingHorizontal: 10,
            }}>
            <Logo fill="white" />
            <Text style={styles.defaultText}>{t('sign_in')}</Text>
            <Text style={{color: '#D6DFFF', marginBottom: 60}}>
              {t('signIn.sing_in_note')}
            </Text>
            <LoginForm />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.defaultText}>{t('signIn.sign_up_note')}</Text>
              <Pressable>
                <Text style={styles.defaultText}>
                  {t('sign_up').toUpperCase()}
                </Text>
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
export default Auth;
const styles = StyleSheet.create({
  defaultText: {color: 'white'},
});
