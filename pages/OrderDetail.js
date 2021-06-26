import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Pressable} from 'react-native';
import SellerInformation from '../components/SellerInformation';
import CustomerInformation from '../components/CustomerInformation';
import OrderInformation from '../components/OrderInformation';
import OrderStatus from '../components/OrderStatus';
import {ScrollView} from 'react-native-gesture-handler';

export default function OrderDetail() {
  const [flag, setFlag] = useState(true);
  return (
    <>
      <ScrollView>
        <View style={{flex: 1}}>
          <OrderStatus />
          <SellerInformation />
          <CustomerInformation />
          <OrderInformation />
        </View>
      </ScrollView>
      <Pressable
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          right: 0,
          height: 50,
          width: '100%',
          backgroundColor: 'orange',
        }}
        onPress={() => {
          setFlag(!additem);
        }}>
        <View>
          <Text style={{color: '#fff'}}>Accept Order</Text>
        </View>
      </Pressable>
    </>
  );
}
