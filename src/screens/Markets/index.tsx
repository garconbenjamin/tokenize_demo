import React, { useEffect, useRef, useState } from 'react';
import { FlatList, RefreshControl, SafeAreaView, View } from 'react-native';
import { DOLLAR_SIGN } from '@/constants';
import useFetch from '@/hooks/useFetch';
import { Market, Price } from '@/types/market';
import Footer from './Footer';
import Header from './Header';
import MarketCard from './MarketCard';

function Markets() {
  const [tabIndex, setTabIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const { data: market, loading: marketLoading } = useFetch<{ data: Market[] }>(
    'https://api.tokenize-dev.com/mobile-api/market/getmarkets',
  );

  const { data: price, refetch } = useFetch<{ data: Price[] }>(
    'https://api.tokenize-dev.com/public/v1/market/get-summaries',
  );

  const marketData = market?.data ?? [];
  const priceDataMap: Record<string, Price> = {};
  price?.data.forEach((item) => {
    priceDataMap[item.market] = item;
  });

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };
  const handleTabChange = (index: number) => {
    setTabIndex(index);
  };
  const flatList = useRef<FlatList>(null);
  const flatListData =
    marketData[tabIndex]?.list.sort((a, b) => a.id - b.id) || [];

  useEffect(() => {
    flatList.current?.scrollToOffset({ offset: 0, animated: false });
  }, [tabIndex]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          paddingTop: 21,
        }}
      >
        <Header
          data={marketData}
          handleTabChange={handleTabChange}
          currentTabIndex={tabIndex}
        />
        <FlatList
          ref={flatList}
          style={{ width: '100%' }}
          data={flatListData}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListFooterComponent={
            <Footer loading={marketLoading} dataLength={marketData.length} />
          }
          renderItem={({ item }) => (
            <MarketCard
              item={item}
              price={priceDataMap[item.marketName]}
              dollarSign={DOLLAR_SIGN[marketData[tabIndex].title.toLowerCase()]}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
export default Markets;
