import * as React from 'react';
import { Ionicons, Entypo } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  if (props.iconType) {
    return (
      <Entypo
        name={props.name}
        size={30} style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}/>
    )
  } else {
    return (
      <Ionicons
        name={props.name}
        size={30}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}
