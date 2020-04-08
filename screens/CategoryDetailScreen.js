import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../constants/Colors';
import Balance from '../components/Balance';
import List from '../components/List';
import Header from '../components/Header';
import TipBox from '../components/TipBox';
import MonthlyChart from '../components/MonthlyChart';
import ListItem from '../components/ListItem';

const categoryMerchantList = [
  {
    id: 1,
    name: 'Tommy Hilfinger',
    date: '02/03/2020',
    amount: 158.5,
    storeIcon: 'carbon-slayers/assets/images/robot-dev.png',
  },
  {
    id: 2,
    name: 'Tommy Hilfinger',
    date: '02/03/2020',
    amount: 87,
    storeIcon: 'carbon-slayers/assets/images/robot-dev.png',
  },
  {
    id: 3,
    name: 'Tommy Hilfinger',
    date: '02/03/2020',
    amount: 79,
    storeIcon: 'carbon-slayers/assets/images/robot-dev.png',
  },
  {
    id: 4,
    name: 'Tommy Hilfinger',
    date: '02/03/2020',
    amount: 158.5,
    storeIcon: 'carbon-slayers/assets/images/robot-dev.png',
  },
  {
    id: 5,
    name: 'Tommy Hilfinger',
    date: '02/03/2020',
    amount: 87,
    storeIcon: 'carbon-slayers/assets/images/robot-dev.png',
  },
  {
    id: 6,
    name: 'Tommy Hilfinger',
    date: '02/03/2020',
    amount: 79,
    storeIcon: 'carbon-slayers/assets/images/robot-dev.png',
  },
  {
    id: 7,
    name: 'Tommy Hilfinger',
    date: '02/03/2020',
    amount: 158.5,
    storeIcon: 'carbon-slayers/assets/images/robot-dev.png',
  },
  {
    id: 8,
    name: 'Tommy Hilfinger',
    date: '02/03/2020',
    amount: 87,
    storeIcon: 'carbon-slayers/assets/images/robot-dev.png',
  },
  {
    id: 9,
    name: 'Tommy Hilfinger',
    date: '02/03/2020',
    amount: 79,
    storeIcon: 'carbon-slayers/assets/images/robot-dev.png',
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
      <List
        items={categoryMerchantList}
        renderItem={({item})=>{
          return <ListItem title={item.name} subtitle={item.date} iconSrc={item.storeIcon} value={item.amount} type={'list'} divider={false}/>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
