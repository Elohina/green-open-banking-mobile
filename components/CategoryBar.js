import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HorizontalBarChart from '../components/HorizontalBarChart';
import Amount from './Amount';

import Colors from '../constants/Colors';

const CategoryBar = ({ title, data, isFull, keys, value, iconName }) => {
    const { container, titleStyle, valueStyle, textContainer } = styles;
    return(
        <View style={container}>
            <View style={textContainer}>
                <Text style={titleStyle}>{title}</Text>
                <Amount amount={value} amountStyle={valueStyle} currency={'$'}/>
            </View>
            <HorizontalBarChart data={data} keys={keys}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        flex: 1
    },
    valueStyle: {
        color: '#FFF'
    },
    titleStyle: {
      color: '#FFF'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 3
    }
});

export default CategoryBar;