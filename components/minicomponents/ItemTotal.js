import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ItemTotal() {
  return (
    <View style={styles.itemtotalmaincontainer}>
      <View style={styles.itemtotal2}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Text> Item Total</Text>
          </View>
        </View>
        <View>
          <Text>Rs 190</Text>
        </View>
      </View>
      <View style={styles.itemtotal2}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Text>Promo -(FLATOFF) </Text>
          </View>
        </View>
        <View>
          <Text>Rs 19</Text>
        </View>
      </View>
      <View style={styles.itemtotal2}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Text>Taxes </Text>
          </View>
        </View>
        <View>
          <Text>Rs 24</Text>
        </View>
      </View>
      <View style={styles.itemtotal2}>
        <Text>Delivery Charge</Text>
        <Text>Rs 30</Text>
      </View>
      <View style={styles.itemtotal2}>
        <Text>Grand Total</Text>
        <Text>Rs 190</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  itemtotalmaincontainer: {
    backgroundColor: '#fff',
    marginVertical: 5,
    padding: 5,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  itemtotal2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  grandtotalcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    backgroundColor: '#fff',
    padding: 5,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
});
