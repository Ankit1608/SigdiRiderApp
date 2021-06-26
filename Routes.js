import React from 'react';
import {View, Text} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome5';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Orders from './pages/Orders';
import Delivery from './pages/Delivery';
import Profile from './pages/Profile';
import OrderDetail from './pages/OrderDetail';
export default function Routes() {
  const Stack=createStackNavigator();
  const Tab = createBottomTabNavigator();
  const OrderStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Orders"
        component={Orders}
        
      />
      
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
    </Stack.Navigator>
  );
 

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Orders"
          component={OrderStack}
          options={{
            title: 'Orders',
            tabBarIcon: ({size, focused, color}) => {
              return <FaIcon name="shopping-bag" size={25} />;
            },
          }}
        />
        <Tab.Screen
          name="Delivery"
          component={Delivery}
          options={{
            title: 'Delivery',
            tabBarIcon: ({size, focused, color}) => {
              return <FaIcon name="biking" size={25} />;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
            tabBarIcon: ({size, focused, color}) => {
              return <FaIcon name="user-alt" size={25} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
