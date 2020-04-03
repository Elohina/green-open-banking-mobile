import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from './ListItem';


const List = ({ items, type }) => {
    const { listStyles } = styles;
    return (
        <FlatList
            data={items}
            keyExtractor={item=>item.name}
            renderItem={({item})=>{
                return <ListItem item={item} type={type}/>;
            }}
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