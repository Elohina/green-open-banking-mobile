import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import girlTip from '../assets/images/girlTip2x.png';

const TipBox = ({ tipText, action }) => {
    const { container, textStyles, imageStyles } = styles;
    return (
        <TouchableOpacity style={container} onPress={() => (action)}>
            <Text style={textStyles}>{tipText}</Text>
            <Image style={imageStyles} source={girlTip}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: '#272835',
        marginHorizontal: 20,
        marginVertical: 20,
        padding: 20,
        flexDirection: 'row',
        flexGrow: 0,
        alignItems: 'center',

        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: {height: 8, width: 0},
    },
    textStyles: {
        color: '#FFF',
        fontSize: 15,
        flex: 1,
    },
    imageStyles: {
        resizeMode: 'contain',
        width: 65,
        height: 85,
    }
});

export default TipBox;
