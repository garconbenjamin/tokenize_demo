/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {View} from 'react-native';
import useFetch from '@/hooks/useFetch';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card, Button, Image, Skeleton} from '@rneui/themed';

type Symbol = {
  id: number;
  marketId: string;
  marketName: string;
  baseCurrency: string;
  marketCurrency: string;
  marketCurrencyLong: string;
  ceiling: string;
  floor: string;
  baseIncrement: string;
  quoteIncrement: null;
  baseMinSize: null;
  baseMaxSize: null;
  tradingStatus: string;
  listRoles: null;
};
type Market = {
  title: string;
  list: Symbol[];
};

type Price = {
  marketId: number;
  market: string;
  askPrice: number;
  bidPrice: number;
  lastPrice: number;
  openPrice: number;
  prevPrice: number;
  high: number;
  low: number;
  volume: number;
  listRoles: null;
};
const Header = (props: {
  data: Market[];
  onPress: (index: number) => void;
  currentTabIndex: number;
}) => {
  const {data, onPress, currentTabIndex} = props;
  return (
    <View style={{marginHorizontal: 10}}>
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
};
const Footer = (props: {loading: boolean; dataLength: number}) =>
  props.loading && props.dataLength === 0 ? (
    <View style={{padding: 10}}>
      <Skeleton height={74} />
    </View>
  ) : (
    <></>
  );

const MarketCard = (props: {item: Symbol; price?: Price}) => {
  const {item, price} = props;
  let priceChangePercentage = '0',
    currentPrice = '--';
  if (price) {
    const {lastPrice, openPrice} = price;
    currentPrice = lastPrice.toFixed(8);
    priceChangePercentage = ((lastPrice - openPrice) / openPrice).toFixed(2);
  }

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
        <Image
          containerStyle={{width: 38, height: 38, marginRight: 15}}
          source={{
            uri: `https://tokenize-dev.com/assets/images/currency-logos/${item.marketCurrency.toLocaleLowerCase()}.png`,
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

          {/* <Text>{JSON.stringify(item)}</Text> */}
        </View>

        {
          <View
            style={{
              marginLeft: 'auto',
              alignItems: 'flex-end',
            }}>
            <Text>{currentPrice}</Text>
            <Text>{priceChangePercentage}%</Text>
          </View>
        }
      </View>
    </Card>
  );
};
function Markets() {
  const [tabIndex, setTabIndex] = useState(0);
  console.log('tabIndex', tabIndex);

  const {
    data: market,

    loading: marketLoading,
    error: marketError,
  } = useFetch<{data: Market[]}>(
    'https://api.tokenize-dev.com/mobile-api/market/getmarkets',
    {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=utf-8',
        'user-agent': 'Android;1.15.0',
        'TOK-DEVICE-ID': 'ea278b7741967a5e',
      },
    },
  );
  // console.log('market', market);
  const {
    data: price,
    loading: priceLoading,
    error: priceError,
    // refetch,
  } = useFetch<{data: Price[]}>(
    'https://api.tokenize-dev.com/public/v1/market/get-summaries',
    {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=utf-8',
        'user-agent': 'Android;1.15.0',
        'TOK-DEVICE-ID': 'ea278b7741967a5e',
      },
    },
  );
  // console.log('price', price);
  const marketData = market?.data ?? [];
  const priceDataMap: Record<string, Price> = {};
  price?.data.forEach(item => {
    priceDataMap[item.market] = item;
  });
  const [refreshing, setRefreshing] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <Text>MARKETS</Text>
        <Header
          data={marketData}
          onPress={(i: number) => {
            setTabIndex(i);
          }}
          currentTabIndex={tabIndex}
        />
        <FlatList
          style={{width: '100%'}}
          data={marketData[tabIndex]?.list.sort((a, b) => a.id - b.id) || []}
          // onRefresh={refetch}
          refreshing={refreshing}
          ListFooterComponent={
            <Footer loading={marketLoading} dataLength={marketData.length} />
          }
          renderItem={({item}) => (
            <MarketCard item={item} price={priceDataMap[item.marketName]} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
export default Markets;
