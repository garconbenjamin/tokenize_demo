import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Text } from '@rneui/themed';
import { Market } from '@/types/market';

import SearchIcon from '@/images/search_icon.svg';
import { colorPalette } from '@/theme';
function Header(props: {
  data: Market[];
  handleTabChange: (index: number) => void;
  currentTabIndex: number;
}) {
  const { data, handleTabChange, currentTabIndex } = props;
  return (
    <View style={{ marginHorizontal: 10 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <Text
          h2
          style={{
            marginLeft: 18,
            color: colorPalette.darkBody,
          }}
        >
          MARKETS
        </Text>
        <SearchIcon fill={colorPalette.gray} />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
        <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
          {data.map(({ title }, i) => {
            const active = currentTabIndex === i;
            return (
              <Button
                key={title}
                titleStyle={{
                  color: active ? 'white' : colorPalette.lightBody,
                  fontSize: 13,
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 15.23,
                }}
                onPress={() => handleTabChange(i)}
                containerStyle={{ marginHorizontal: 5 }}
                style={{ minWidth: 32 }}
                buttonStyle={{
                  paddingTop: 8,
                  paddingBottom: 9,
                  minWidth: 78,
                  ...(active ? { backgroundColor: colorPalette.blue1 } : {}),
                }}
              >
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
