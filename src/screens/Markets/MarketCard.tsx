import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Card, Text } from '@rneui/themed';
import { Price, Symbol } from '@/types/market';

import Arrow from '@/images/arrow.svg';
import { colorPalette } from '@/theme';

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
    priceColor:
      Number(priceChangeText) < 0 ? colorPalette.red : colorPalette.green,
    showArrow: Number(priceChangeText) !== 0,
    priceChangeText,
    rotateDeg: priceChange > 0 ? '0deg' : '180deg',
  };
};
function MarketCard(props: {
  item: Symbol;
  price?: Price;
  dollarSign: string;
}) {
  const { item, price, dollarSign } = props;
  const { currentPrice, priceColor, priceChangeText, rotateDeg, showArrow } =
    getPropertyByPrice(price?.lastPrice, price?.openPrice);
  return (
    <Card
      containerStyle={{
        marginHorizontal: 10,
        marginVertical: 10,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <FastImage
          style={{ width: 38, height: 38, marginRight: 15 }}
          source={{
            uri: `https://tokenize-dev.com/assets/images/currency-logos/${item.marketCurrency.toLocaleLowerCase()}.png`,
            priority: FastImage.priority.normal,
          }}
        />
        <View>
          <Text
            h3
            style={{
              color: colorPalette.darkBody,
            }}
          >
            {item.marketCurrency}
          </Text>
          <Text
            style={{
              color: colorPalette.lightBody,
            }}
          >
            {item.marketCurrencyLong}
          </Text>
        </View>

        {
          <View
            style={{
              marginLeft: 'auto',
              alignItems: 'flex-end',
            }}
          >
            <Text>
              {dollarSign}
              {parseFloat(currentPrice)}
            </Text>
            <Text style={{ color: priceColor }}>
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
