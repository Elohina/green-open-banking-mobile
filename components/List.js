import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from './ListItem';


const List = ({ items, renderItem }) => {
    const { listStyles } = styles;
    return (
        <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            style={listStyles}
        />
    )
};

const styles = StyleSheet.create({
    listStyles: {
        marginHorizontal: 20
    }
});

export default List;