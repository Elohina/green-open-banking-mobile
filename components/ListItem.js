import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItem = ({ item }) => {
    const { leftItem, rightItem, container } = styles;
    return (
        <View style={container}>
            <Text style={leftItem}>{item.title}</Text>
            <Text style={rightItem}>${item.amount}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginLeft: 30,
        marginRight: 30,
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
