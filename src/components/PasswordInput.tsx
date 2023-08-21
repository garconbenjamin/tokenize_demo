import React, {useState} from 'react';

import {Input, InputProps, Button} from '@rneui/themed';
import EyeIcon from '@/images/eye_icon.svg';
import {View} from 'react-native';

const EyeToggler = (props: {show: boolean}) => (
  <View
    style={{
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <EyeIcon fill="white" />
    {props.show && (
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          width: '150%',
          height: 2,
          transform: [{rotate: '-45deg'}],
        }}
      />
    )}
  </View>
);

function PasswordInput(
  props: Omit<InputProps, 'secureTextEntry' | 'rightIcon'>,
) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };
  return (
    <Input
      secureTextEntry={secureTextEntry}
      rightIcon={
        <Button
          onPress={toggleSecureEntry}
          buttonStyle={{backgroundColor: 'transparent'}}>
          <EyeToggler show={secureTextEntry} />
        </Button>
      }
      {...props}
    />
  );
}
export default PasswordInput;
