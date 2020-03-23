import * as React from 'react';
import { Text, View } from 'react-native';
import NumberFormat from 'react-number-format';
import Amount from './Amount';

const Balance = ({ amount, currency, title }) => {
    const { container, amountStyle, titleStyle, currencyStyle } = styles;
    return (
        <View style={container}>
            <Amount
                amount={amount}
                amountStyle={amountStyle}
                currency={currency}
                currencyStyle={currencyStyle}
            />
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
