import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {RootScreenProps, RootScreenType} from '@/types/navigators';
import {ImageBackground, Pressable, View, StyleSheet} from 'react-native';
import UserIcon from '@/images/user_email_icon.svg';
import PasswordIcon from '@/images/password_icon.svg';
import bg from '@/images/bg.png';
import {SafeAreaView} from 'react-native';
import {Button, Text, Input} from '@rneui/themed';
import Logo from '@/images/logo.svg';
import PasswordInput from '@/components/PasswordInput';
import {getUniqueId, getUserAgent} from 'react-native-device-info';
import {TEST_DATA} from '@/constants';
const Auth = () => {
  const navigation = useNavigation<RootScreenProps>();
  const {t} = useTranslation();
  const [email, setEmail] = useState(TEST_DATA.email);
  const [password, setPassword] = useState(TEST_DATA.password);
  const handleSignIn = async () => {
    const userAgent = await getUserAgent();
    const uniqueId = await getUniqueId();

    const res = await fetch(
      'https://api.tokenize-dev.com/mobile-api/auth/login',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json;charset=utf-8',
          'user-agent': userAgent,
          'TOK-DEVICE-ID': uniqueId,
        },
        body: JSON.stringify({
          email,
          password,
          captcha: 'yWOEjZMIhY',
          captchaBypass: 'yWOEjZMIhY',
        }),
      },
    );
    if (res.status === 200) {
      navigation.push(RootScreenType.MAIN);
    }
  };
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
            <Input
              leftIcon={<UserIcon fill="white" />}
              placeholder={t('signIn.email')}
              autoCorrect={false}
              onChangeText={text => setEmail(text)}
              value={email}
            />
            <PasswordInput
              leftIcon={<PasswordIcon fill="white" />}
              placeholder={t('signIn.password')}
              autoCorrect={false}
              onChangeText={text => setPassword(text)}
              value={password}
            />
            <View style={{width: '100%'}}>
              <Button onPress={handleSignIn}>
                {t('sign_in').toUpperCase()}
              </Button>
            </View>
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
};
export default Auth;
const styles = StyleSheet.create({
  defaultText: {color: 'white'},
});
