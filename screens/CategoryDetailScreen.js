import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../constants/Colors';
import Balance from '../components/Balance';
import List from '../components/List';
import Header from '../components/Header';
import TipBox from '../components/TipBox';
import MonthlyChart from '../components/MonthlyChart';

const balanceList = [
  {
    name: 'currentAccount',
    title: 'Current account',
    amount: 1583.5
  },
  {
    name: 'creditCard',
    title: 'Credit card',
    amount: -887
  },
  {
    name: 'upcomingExpenses',
    title: 'Upcoming exprenses',
    amount: -379
  },
];

export default function CategoryDetailScreen({navigation, route}) {
  const { container, spendingPercentage } = styles;
  const { title } = route.params;
  return (
    <View style={container}>
      <Header title={title} navigation={navigation}/>
      <Balance amount={317} currency={'$'} title={'March'}/>
      <MonthlyChart />
      <TipBox tipText="Hey there, 30% of your spending is on clothes. We can help you spend less.." />
      <List items={balanceList}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
