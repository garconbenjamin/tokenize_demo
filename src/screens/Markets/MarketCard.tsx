import React from 'react';
import {View} from 'react-native';
import {Text, Card} from '@rneui/themed';
import FastImage from 'react-native-fast-image';
import {Symbol, Price} from '@/types/market';
import Arrow from '@/images/arrow.svg';

const getPropertyByPrice = (lastPrice: number = 0, openPrice: number = 0) => {
  let priceChange;
  let priceChangeText;

  priceChange = (lastPrice - openPrice) / openPrice;
  if (Number.isNaN(priceChange)) {
    priceChange = 0;
  }

  priceChangeText = priceChange.toFixed(2);
  if (priceChangeText === '-0.00') {
    priceChangeText = '0.00';
  }

  return {
    currentPrice: lastPrice?.toFixed(8) || '--',
    priceColor: Number(priceChangeText) < 0 ? '#F94B5C' : '#3BBA7D',
    showArrow: Number(priceChangeText) !== 0,
    priceChangeText,
    rotateDeg: priceChange > 0 ? '0deg' : '180deg',
  };
};
function MarketCard(props: {item: Symbol; price?: Price}) {
  const {item, price} = props;
  const {currentPrice, priceColor, priceChangeText, rotateDeg, showArrow} =
    getPropertyByPrice(price?.lastPrice, price?.openPrice);
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
              {showArrow && (
                <Arrow
                  style={{
                    transform: [
                      {
                        rotate: rotateDeg,
                      },
                    ],
                  }}
                  fill={priceColor}
                />
              )}
            </Text>
          </View>
        }
      </View>
    </Card>
  );
}
export default MarketCard;
