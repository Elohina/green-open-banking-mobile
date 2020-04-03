import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import HorizontalBarChart from '../components/HorizontalBarChart';
import Amount from './Amount';

import Colors from '../constants/Colors';

const CategoryBar = ({ title, data, isFull, keys, showValue, iconName, action }) => {
    const { container, titleStyle, valueStyle, textContainer, currencyStyle } = styles;
    return(
        <TouchableOpacity style={container} onPress={action ? ()=>(action()) : undefined}>
            <View style={textContainer}>
                <Text style={titleStyle}>{title}</Text>
                { showValue &&
                    <Amount amount={data[0].value} amountStyle={valueStyle} currency={'$'} currencyStyle={currencyStyle} />
                }
            </View>
            <HorizontalBarChart data={data} keys={keys}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        marginHorizontal: 20,
    },
    valueStyle: {
        color: '#FFF',
    },
    titleStyle: {
      color: '#FFF',
    },
    textContainer: {
        flex: 0,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 3,
    },
    currencyStyle: {
        color: '#FFF',
    }
});

export default CategoryBar;