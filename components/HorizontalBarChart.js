import React from 'react';
import { View } from 'react-native';
import { StackedBarChart } from 'react-native-svg-charts';

import Colors from '../constants/Colors';

const HorizontalBarChart = ({data, keys}) => {
    return(
        <View style={{ flexDirection: 'row', height: 16, paddingVertical: 6 }}>
            <StackedBarChart
                style={{ flex: 1 }}
                colors = {[Colors.pink, Colors.tabIconDefault]}
                data={data}
                keys={keys}
                horizontal={true}
                // contentInset={{ top: 20, bottom: 20 }}
                valueAccessor={({ item, key }) => item[key]}
            >
            </StackedBarChart>
        </View>
    );
};

// const styles = StyleSheet.create({

// });

export default HorizontalBarChart;