import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function OrderItem() {
  return (
    <View style={styles.orderitemmaincontainer}>
      <View style={styles.orderitemmaincontainer2}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              height: 12,
              width: 12,
              borderWidth: 1,
              borderColor: 'red',
              marginRight: 5,
            }}></View>
          <Text>Steaming Pulao</Text>
        </View>
      </View>
      <View style={styles.orderitemmaincontainer2}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>Quantity: Full</Text>
        </View>
      </View>
      <View style={styles.orderitemmaincontainer2}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 20,
              width: 20,
              borderWidth: 1,
              borderColor: 'green',
              marginRight: 5,
              backgroundColor: '#E2F6C7',
            }}>
            <Text>1</Text>
          </View>

          <Text>X Rs 190</Text>
        </View>
        <View>
          <Text>Rs 190</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  orderitemmaincontainer: {
    backgroundColor: '#fff',
    marginVertical: 5,
    padding: 5,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  orderitemmaincontainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});
