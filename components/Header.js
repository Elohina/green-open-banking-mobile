import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import ArrowBack from '../assets/images/arrow_back.png';

const Header = ({ title, navigation }) => {
    const { titleStyle, container } = styles;
    return(
        <View style={container}>
            <TouchableOpacity onPress={()=>(navigation.goBack())}>
                { navigation &&
                    <Image source={ArrowBack} style={{height: 30, width: 30}} />
                }
            </TouchableOpacity>
            <Text style={titleStyle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
        marginHorizontal: 20
    },
    titleStyle: {
        fontSize: 23,
        color: '#FFF',
        marginHorizontal: 70,
    }
});

export default Header;
