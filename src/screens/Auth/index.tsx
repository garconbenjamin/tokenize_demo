import React from 'react';
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

const HomeScreen = () => {
  const navigation = useNavigation<RootScreenProps>();
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
            <Input
              leftIcon={<UserIcon fill="white" />}
              placeholder={t('signIn.email')}
              autoCorrect={false}
            />
            <PasswordInput
              leftIcon={<PasswordIcon fill="white" />}
              placeholder={t('signIn.password')}
              autoCorrect={false}
            />
            <View style={{width: '100%'}}>
              <Button
                onPress={() => {
                  navigation.replace(RootScreenType.MAIN);
                }}>
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
export default HomeScreen;
const styles = StyleSheet.create({
  defaultText: {color: 'white'},
});
