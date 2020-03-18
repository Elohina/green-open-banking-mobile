import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from './ListItem';


const List = ({ items }) => {
    const { listStyles } = styles;
    return (
        <FlatList
            data={items}
            keyExtractor={item=>item.name}
            renderItem={({item})=>{
                return <ListItem item={item} />;
            }}
        />
    )
};

const styles = StyleSheet.create({
    listStyles: {
        marginVertical: 20
    }
});

export default List;