import React, {useState} from 'react';
import {View, FlatList, SafeAreaView, RefreshControl} from 'react-native';
import useFetch from '@/hooks/useFetch';
import Header from './Header';
import MarketCard from './MarketCard';
import {Market, Price} from '@/types/market';
import Footer from './Footer';
import {useAppSelector} from '@/store/hook';

function Markets() {
  const [tabIndex, setTabIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const {data: market, loading: marketLoading} = useFetch<{data: Market[]}>(
    'https://api.tokenize-dev.com/mobile-api/market/getmarkets',
  );

  const {data: price, refetch} = useFetch<{data: Price[]}>(
    'https://api.tokenize-dev.com/public/v1/market/get-summaries',
  );

  const marketData = market?.data ?? [];
  const priceDataMap: Record<string, Price> = {};
  price?.data.forEach(item => {
    priceDataMap[item.market] = item;
  });
  const user = useAppSelector(state => state.user);
  console.log('user', user);
  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          paddingTop: 21,
        }}>
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
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
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
