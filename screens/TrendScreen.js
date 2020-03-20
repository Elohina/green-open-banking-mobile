import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HorizontalBarChart from '../components/HorizontalBarChart';
import CategoryBar from '../components/CategoryBar';

import Colors from '../constants/Colors';

export default function TrendScreen() {
  const { container, contentContainer } = styles;
  return (
    <ScrollView style={container} contentContainerStyle={contentContainer}>
      <View>
        <CategoryBar title="Clothing" data={[{total: 1400, clothing: 870}]} keys={['total', 'clothing']} value={-358}/>
      </View>
      <View>
        <CategoryBar title="Groccery" data={[{total: 1400, clothing: 300}]} keys={['total', 'clothing']} value={-358}/>
      </View>
      <View>
        <CategoryBar title="Restaurant" data={[{total: 1400, clothing: 200}]} keys={['total', 'clothing']} value={-358}/>
      </View>
      <View>
        <CategoryBar title="Transport" data={[{total: 1400, clothing: 1100}]} keys={['total', 'clothing']} value={-358}/>
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
  contentContainer: {
    paddingTop: 15,
  },
  title: {
    color: '#FFF'
  }
});
