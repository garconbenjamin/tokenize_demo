import React from 'react';
import {View} from 'react-native';
import {Text, Card} from '@rneui/themed';
import FastImage from 'react-native-fast-image';
import {Symbol, Price} from '@/types/market';
import Arrow from '@/images/arrow.svg';
function MarketCard(props: {item: Symbol; price?: Price}) {
  const {item, price} = props;

  let priceChangeText = '0',
    priceChange = 0,
    currentPrice = '--';
  if (price) {
    const {lastPrice, openPrice} = price;
    currentPrice = lastPrice.toFixed(8);
    priceChange = (lastPrice - openPrice) / openPrice;
    if (Number.isNaN(priceChange)) {
      priceChange = 0;
    }
    priceChangeText = priceChange.toFixed(2);
  }
  const priceColor = priceChange > 0 ? '#3BBA7D' : '#F94B5C';
  return (
    <Card
      containerStyle={{
        borderRadius: 8,
        borderWidth: 0,
        shadowColor: '#EBEDFB',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6,
        padding: 18,
        marginHorizontal: 10,
        marginVertical: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <FastImage
          style={{width: 38, height: 38, marginRight: 15}}
          source={{
            uri: `https://tokenize-dev.com/assets/images/currency-logos/${item.marketCurrency.toLocaleLowerCase()}.png`,
            priority: FastImage.priority.normal,
          }}
        />
        <View>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 15,
              color: '#3D436C',
            }}>
            {item.marketCurrency}
          </Text>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 14,
              color: '#8E92B2',
            }}>
            {item.marketCurrencyLong}
          </Text>
        </View>

        {
          <View
            style={{
              marginLeft: 'auto',
              alignItems: 'flex-end',
            }}>
            <Text>{currentPrice}</Text>
            <Text style={{color: priceColor, fontWeight: '500'}}>
              {priceChangeText}%
              <Arrow
                style={{
                  transform: [
                    {
                      rotate: priceChange > 0 ? '0deg' : '180deg',
                    },
                  ],
                }}
                fill={priceColor}
              />
            </Text>
          </View>
        }
      </View>
    </Card>
  );
}
export default MarketCard;
