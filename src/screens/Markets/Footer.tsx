import React from 'react';
import {View} from 'react-native';
import {Skeleton} from '@rneui/themed';

function Footer(props: {loading: boolean; dataLength: number}) {
  const {loading, dataLength} = props;
  return loading && dataLength === 0 ? (
    <View style={{padding: 10}}>
      <Skeleton height={74} style={{marginBottom: 10}} />
      <Skeleton height={74} style={{marginBottom: 10}} />
      <Skeleton height={74} style={{marginBottom: 10}} />
      <Skeleton height={74} style={{marginBottom: 10}} />
      <Skeleton height={74} style={{marginBottom: 10}} />
    </View>
  ) : (
    <></>
  );
}
export default Footer;
