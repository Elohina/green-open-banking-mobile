import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Amount from './Amount';
import Colors from "../constants/Colors";

const ListItem = ({ item, type }) => {
    const { leftItem, rightItem, container, buttonStyle, listStyle } = styles;
    return (
        <View style={type === 'button' ? {...container, ...buttonStyle} : {...container, ...listStyle}}>
            <Text style={leftItem}>{item.title}</Text>
            <Amount amount={item.amount} amountStyle={rightItem} currency={'$'} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginLeft: 30,
        marginRight: 30,
    },
    buttonStyle: {
        alignItems: 'center',
        height: 60,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,

        backgroundColor: Colors.background,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: {height: 8, width: 0},

        paddingHorizontal: 10,
    },
    listStyle: {
        borderBottomColor: '#818396',
        borderStyle:'solid',
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    leftItem: {
        color: '#FFF',
    },
    rightItem: {
        color: '#FFF',
    }
});

export default ListItem;
