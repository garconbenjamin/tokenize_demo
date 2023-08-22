import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from '@rneui/themed';

function CheckBox(props: { label?: string }) {
  const { label } = props;
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <Pressable onPress={toggleCheckbox} style={styles.container}>
      <View style={styles.checkBox}>
        {checked && <View style={styles.tink} />}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </Pressable>
  );
}
export default CheckBox;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  checkBox: {
    width: 19,
    height: 19,
    padding: 2,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.2)',
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
  },
  label: { marginLeft: 6, color: 'white' },
  tink: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
});
