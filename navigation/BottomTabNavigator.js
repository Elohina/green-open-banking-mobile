import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TrendScreen from '../screens/TrendScreen';
import CategoryDetailScreen from '../screens/CategoryDetailScreen';
import Colors from '../constants/Colors';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  // navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  const TrendStack = createStackNavigator();

  const TrendStackScreen = () => {
    return (
      <TrendStack.Navigator screenOptions={{headerShown: false}}>
        <TrendStack.Screen name="Trend" component={TrendScreen} />
        <TrendStack.Screen name="CategoryDetail" component={CategoryDetailScreen} />
      </TrendStack.Navigator>
    );
  };

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        inactiveBackgroundColor: Colors.tabBar,
        activeBackgroundColor: Colors.tabBar,
        activeTintColor: Colors.tintColor,
        inactiveTintColor: Colors.tabIconDefaultß,
        labelStyle: {
          margin: 0
        },
      }}
    >
      <BottomTab.Screen
        name="Balance"
        component={HomeScreen}
        options={{
          title: 'Balance',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-cash" />,
        }}
      />
      <BottomTab.Screen
        name="Trends"
        component={TrendStackScreen}
        options={{
          title: 'Trends',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="bar-graph" iconType="Entypo"/>,
        }}
      />
      <BottomTab.Screen
        name="Progress"
        component={TrendScreen}
        options={{
          title: 'Progress',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-star-half" />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={TrendScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-menu" />,
        }}
      />
    </BottomTab.Navigator>
  );
}
