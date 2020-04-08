import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Amount from './Amount';
import Colors from "../constants/Colors";

const ListItem = ({ title, subtitle, value, iconSrc, type, divider=true }) => {
    const {
        titleStyles,
        subtitleStyles,
        leftItem,
        rightItem,
        container,
        buttonStyle,
        listStyle,
        currencyStyle,
        dividerStyle,
        iconStyles,
        iconContainer
    } = styles;

    // TODO: Test image, change it to receive it as parameter
    const imageSrc = iconSrc ? require('../assets/images/robot-dev.png') : undefined;
    return (
        <View style={
            type === 'button' ? (
                {...container, ...buttonStyle}
            ) : (
                divider ? (
                    {...container, ...listStyle, ...dividerStyle}
                ) : (
                    {...container, ...listStyle}
                )
            )}>
            { iconSrc &&
                <View style={iconContainer}>
                    <Image style={iconStyles} source={imageSrc} />
                </View>
            }

            <View style={leftItem}>
                <Text style={titleStyles}>{title}</Text>
                { subtitle && <Text style={subtitleStyles}>{subtitle}</Text>}
            </View>
            <View style={rightItem}>
                <Amount amount={value} amountStyle={{color: '#FFF'}} currency={'$'} currencyStyle={currencyStyle} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
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
        paddingBottom: 10
    },
    dividerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#818396',
        borderStyle:'solid',
    },
    titleStyles: {
        color: '#FFF',
    },
    subtitleStyles: {
        color: '#818396',
    },
    leftItem: {
        flex: 4,
        justifyContent: 'center'
    },
    rightItem: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    currencyStyle: {
        color: '#FFF',
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    iconStyles: {
        width: 50,
        height: 50,
        borderRadius: 50,
    }
});

export default ListItem;
