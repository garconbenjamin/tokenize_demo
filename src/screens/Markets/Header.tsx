import {View, ScrollView} from 'react-native';

import {Button, Text} from '@rneui/themed';

import {Market} from '@/types/market';
import SearchIcon from '@/images/search_icon.svg';
function Header(props: {
  data: Market[];
  onPress: (index: number) => void;
  currentTabIndex: number;
}) {
  const {data, onPress, currentTabIndex} = props;
  return (
    <View style={{marginHorizontal: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Text
          style={{
            marginLeft: 18,
            color: '#3D436C',
            fontSize: 16,
            lineHeight: 16,
            fontWeight: '700',
          }}>
          MARKETS
        </Text>
        <SearchIcon fill="#40466D" />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', paddingBottom: 10}}>
          {data.map(({title}, i) => {
            const active = currentTabIndex === i;
            return (
              <Button
                key={title}
                titleStyle={{
                  color: active ? '#FFF' : '#8E92B2',
                  fontSize: 13,
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 15.23,
                }}
                onPress={() => onPress(i)}
                style={{marginHorizontal: 5, minWidth: 32}}
                buttonStyle={{
                  paddingTop: 8,
                  paddingBottom: 9,
                  minWidth: 78,
                  ...(active ? {backgroundColor: '#6992FF'} : {}),
                }}>
                {title}
              </Button>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
export default Header;
