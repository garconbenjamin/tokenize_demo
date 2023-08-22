import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, View } from 'react-native';
import Snackbar from 'react-native-snackbar';
import { useNavigation } from '@react-navigation/native';
import { Button, Input, Text } from '@rneui/themed';
import CheckBox from '@/components/Checkbox';
import PasswordInput from '@/components/PasswordInput';
import { CAPTCHA, TEST_DATA } from '@/constants';
import { setUser } from '@/store/actions';
import { RootScreenProps, RootScreenType } from '@/types/navigators';
import { User } from '@/types/user';
import clientFetch from '@/utils/clientFetch';

import PasswordIcon from '@/images/password_icon.svg';
import UserIcon from '@/images/user_email_icon.svg';
const { captcha, captchaBypass } = CAPTCHA;

function LoginForm() {
  const navigation = useNavigation<RootScreenProps>();
  const { t } = useTranslation();
  const [email, setEmail] = useState(TEST_DATA.email);
  const [password, setPassword] = useState(TEST_DATA.password);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const res = await clientFetch(
        'https://api.tokenize-dev.com/mobile-api/auth/login',
        {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
            captcha,
            captchaBypass,
          }),
        },
      );
      if (res.status === 200) {
        const userData = await res.json();
        setUser(userData.data as User);
        navigation.reset({ index: 0, routes: [{ name: RootScreenType.MAIN }] });
      } else {
        const userData = await res.json();
        throw new Error(userData.message);
      }
    } catch (err) {
      Snackbar.show({
        text: err.message,
        duration: Snackbar.LENGTH_SHORT,
      });
    }
    setLoading(false);
  };
  return (
    <>
      <Input
        leftIcon={<UserIcon fill="white" />}
        placeholder={t('signIn.email')}
        autoCorrect={false}
        onChangeText={(text) => setEmail(text)}
        value={email}
        errorStyle={{ height: 0 }}
      />
      <PasswordInput
        leftIcon={<PasswordIcon fill="white" />}
        placeholder={t('signIn.password')}
        autoCorrect={false}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 93,
          marginTop: 6,
        }}
      >
        <CheckBox label={t('signIn.remember')} />
        <Text style={{ color: 'white', fontWeight: '500' }}>
          {t('signIn.forgot_password')}
        </Text>
      </View>

      <View style={{ width: '100%', marginBottom: 20 }}>
        <Button loading={loading} onPress={handleSignIn}>
          {t('sign_in').toUpperCase()}
        </Button>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontWeight: '400' }}>
          {t('signIn.sign_up_note')}{' '}
        </Text>
        <Pressable>
          <Text style={{ color: 'white', fontWeight: '700' }}>
            {t('sign_up').toUpperCase()}
          </Text>
        </Pressable>
      </View>
    </>
  );
}
export default LoginForm;
