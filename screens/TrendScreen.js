import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CategoryBar from '../components/CategoryBar';
import bankCard from '../assets/images/bank_card.png';
import Balance from '../components/Balance';

import Colors from '../constants/Colors';
import Header from '../components/Header';

export default function TrendScreen({navigation}) {
  const { container, cardStyles, cardTitle, topInfo } = styles;
  return (
    <ScrollView style={container}>
      <Header title={"Your spending"} />
      <View style={topInfo}>
        <Image source={bankCard} style={cardStyles}/>
        <Text style={cardTitle}>All accounts</Text>
        <Balance amount={1447} currency={'$'} title="March" />
      </View>
      <View>
        <CategoryBar
          action={() => (navigation.navigate('Trends', {screen: 'CategoryDetail', params: { title: 'Clothings spending'}}))}
          data={[{total: 1400, clothing: 870}]}
          keys={['total', 'clothing']}
          title="Clothing"
          value={870}
        />
      </View>
      <View>
        <CategoryBar title="Groccery" data={[{total: 1400, clothing: 300}]} keys={['total', 'clothing']} value={300}/>
      </View>
      <View>
        <CategoryBar title="Restaurant" data={[{total: 1400, clothing: 200}]} keys={['total', 'clothing']} value={200}/>
      </View>
      <View>
        <CategoryBar title="Transport" data={[{total: 1400, clothing: 1100}]} keys={['total', 'clothing']} value={1100}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20
  },
  topInfo: {
    alignItems: 'center'
  },
  cardStyles: {
    height: 80,
    width: 120,
    left: 6
  },
  cardTitle: {
    fontSize: 18,
    color: '#FFF',
    marginVertical: 10
  }
});
