import React from 'react';
import { View, Text, Grid } from 'react-native';

import { LineChart, XAxis } from 'react-native-svg-charts';
import { Circle } from 'react-native-svg';
import Colors from '../constants/Colors';

const MonthlyChart = () => {
    const data = [ {value: 448, month: 4}, {value: 500, month: 5}, {value: 460, month: 6}, {value: 480, month: 7}, {value: 460, month: 8}, {value: 500, month: 9} ];
    const Decorator = ({ x, y, data }) => {
        return data.map((value, index) => (
            <Circle
                key={ index }
                cx={ x(index) }
                cy={ y(value) }
                r={ 4 }
                stroke={ Colors.pink }
                fill={ Colors.pink }
            />
        ));
    };

    const CUT_OFF = 470;
    const Labels = ({ x, y, bandwidth, data }) => {
        return data.map((value, index) => (
            <Text
                key={ index }
                x={ x(index) + (0.6 / 2) }
                y={ value < CUT_OFF ? y(value) - 10 : y(value) + 15 }
                fontSize={20}
                fill={'red'}
                alignmentBaseline={ 'middle' }
                textAnchor={ 'middle' }
            >
                {value}
            </Text>
        ))
    }

    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    return (
        <View style={{height: 100, paddingVertical: 10, paddingHorizontal: 10 , marginHorizontal: 20}}>
            <XAxis
                data={data}
                xAccessor={({ item }) => item.month}
                contentInset={{ top: 20, bottom: 20, left: 20, right: 20 }}
                svg={{
                    fill: '#818396',
                    fontSize: 12,
                }}
                numberOfTicks={6}
                formatLabel={ (value) => {
                    var d = new Date(`${value}/01/2020`);
                    return monthNames[d.getMonth()];
                }}
            />
            <LineChart
                style={{height: 100, flex: 1}}
                data={ data.map(item => item.value) }
                svg={{
                    stroke: Colors.pink,
                    strokeWidth: 2,
                }}
                contentInset={{ top: 20, bottom: 20, left: 20, right: 20 }}
                spacing={0.2}
            >
                {/* TODO: Fix chart labels */}
                {/* <Labels/> */}
                <Decorator/>
            </LineChart>
        </View>
    );
};

export default MonthlyChart;
