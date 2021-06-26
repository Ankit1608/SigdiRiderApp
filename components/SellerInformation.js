import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function SellerInformation() {
  return (
    <View style={styles.sellerinformationmaincontainer}>
      <View>
        <Text>Seller Information</Text>
      </View>
      <View style={styles.sellerinformationcontainer2}>
        <View style={{flexDirection: 'row'}}>
          <Text>Image</Text>
          <Text>Seller Name</Text>
        </View>
        <View>
          <Text>Navigation</Text>
        </View>
      </View>
      <View style={styles.sellerinformationcontainer2}>
        <Text>
          Flat No. 102, Plot No. 53, Rishabh Residency, Kalyan Nagar Venture-3,
          Mothi Nagar, Hyderabad-500018
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  sellerinformationmaincontainer: {
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  sellerinformationcontainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
