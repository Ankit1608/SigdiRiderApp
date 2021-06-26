import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import OrderItem from './minicomponents/OrderItem';
import ItemTotal from './minicomponents/ItemTotal';
export default function OrderInformation() {
  return (
    <View style={styles.orderinformationmaincontainer}>
      <View>
        <Text style={styles.orderinformationtext}>Order Information</Text>
      </View>
      <View>
        <OrderItem />
        <OrderItem />
      </View>
      <View>
        <ItemTotal />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  orderinformationmaincontainer: {
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  orderinformationcontainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  orderinformationtext: {
    marginVertical: 5,
  },
});
