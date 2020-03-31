import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';
import Balance from '../components/Balance';
import List from '../components/List';

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

const savingsList = [
  {
    name: 'savings',
    title: 'Savings',
    amount: 6149
  },
  {
    name: 'jointSavings',
    title: 'Joint savings',
    amount: 8123
  },
  {
    name: 'investments',
    title: 'Investments',
    amount: 10876
  },
];

export default function CategoryDetailScreen({navigation, route}) {
  const { container, titleStyle } = styles;
  const { title } = route.params;
  return (
    <View style={container}>
      <Text style={titleStyle}>{title}</Text>
      <View>
        <Balance amount={317} currency={'$'} title={'monthly average'}/>
        <List items={balanceList}/>
      </View>
    </View>
  );
}

CategoryDetailScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  titleStyle: {
    fontSize: 23,
    color: '#FFF',
    alignSelf: 'center',
    marginTop: 30
  }
});
