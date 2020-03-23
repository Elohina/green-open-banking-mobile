import * as React from 'react';
import { Text } from 'react-native';
import NumberFormat from 'react-number-format';
import Colors from '../constants/Colors';

const Amount = ({ amount, amountStyle, currency, currencyStyle }) => {
    return (
        <Text style={amount < 0 ? {...amountStyle, color: Colors.pink} : amountStyle}>
            { amount < 0 && <Text>-</Text>}
            { currency &&
                <Text style={currencyStyle}>{currency}</Text>
            }
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
    );
};

export default Amount;
