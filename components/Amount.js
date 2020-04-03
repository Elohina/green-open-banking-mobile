import * as React from 'react';
import { Text, View } from 'react-native';
import NumberFormat from 'react-number-format';
import Colors from '../constants/Colors';

const Amount = ({ amount, amountStyle, currency, currencyStyle }) => {
    return (
        <View style={{flex: 0, flexDirection: 'row'}}>
            { amount < 0 && <Text style={amount < 0 ? {...amountStyle, color: Colors.pink} : amountStyle}>-</Text>}
            { currency &&
                <Text style={amount < 0 ? {...currencyStyle, color: Colors.pink} : currencyStyle}>{currency}</Text>
            }
            <Text style={amount < 0 ? {...amountStyle, color: Colors.pink} : amountStyle}>
                <NumberFormat
                    value={amount}
                    displayType={'text'}
                    thousandSeparator={true}
                    allowNegative={false}
                    renderText={
                        (value) =>  <Text>{value}</Text>
                    }
                />
            </Text>
        </View>
    );
};

export default Amount;
