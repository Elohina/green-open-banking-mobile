import * as React from 'react';
import { Text, View } from 'react-native';

const Balance = ({ amount, title }) => {
    const { container, amountStyle, titleStyle, currencyStyle } = styles;
    return (
        <View style={container}>
            <Text style={amountStyle}>
                <Text style={currencyStyle}>$</Text>
                {amount}
            </Text>
            <Text style={titleStyle}>{title}</Text>
        </View>
    );
};

const styles = {
    container: {
        alignItems: 'center',
        margin: 20
    },
    amountStyle: {
        fontSize: 50,
        color: '#FFF',
    },
    titleStyle: {
        fontSize: 20,
        color: '#FFF',
    },
    currencyStyle: {
        fontSize: 25,
        color: '#FFF',
    }
}

export default Balance;
