import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {RootScreenProps, RootScreenType} from '@/types/navigators';
import {View} from 'react-native';
import UserIcon from '@/images/user_email_icon.svg';
import PasswordIcon from '@/images/password_icon.svg';
import {Button, Input} from '@rneui/themed';
import PasswordInput from '@/components/PasswordInput';
import {TEST_DATA, CAPTCHA} from '@/constants';
import {setUser} from '@/store/actions';
import {User} from '@/types/user';
import clientFetch from '@/utils/clientFetch';

const {captcha, captchaBypass} = CAPTCHA;
function LoginForm() {
  const navigation = useNavigation<RootScreenProps>();
  const {t} = useTranslation();
  const [email, setEmail] = useState(TEST_DATA.email);
  const [password, setPassword] = useState(TEST_DATA.password);

  const handleSignIn = async () => {
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
      navigation.push(RootScreenType.MAIN);
    }
  };
  return (
    <>
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
        <Button onPress={handleSignIn}>{t('sign_in').toUpperCase()}</Button>
      </View>
    </>
  );
}
export default LoginForm;
