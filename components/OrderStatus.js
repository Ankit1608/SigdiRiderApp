import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const orderstatusdata = [
  {
    title: 'Customer Ordered',
    flag: true,
  },
];
export default function OrderStatus() {
  return (
    <View style={styles.orderstatusmaincontainer}>
      <View>
        <Text>Order Status</Text>
      </View>
      <View style={styles.orderstatuscontainer2}>
        <View style={{backgroundColor: '#eee'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 12,
                  width: 12,
                  borderRadius: 6,
                  backgroundColor: '#fccf08',
                  marginRight: 5,
                }}
              />
              <View
                style={{height: 25, width: 2, backgroundColor: '#fccf08'}}
              />
            </View>

            <Text> Customer Ordered</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  orderstatusmaincontainer: {
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  orderstatuscontainer2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
