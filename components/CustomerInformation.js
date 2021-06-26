import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function CustomerInformation() {
  return (
    <View style={styles.customerinformationmaincontainer}>
      <View>
        <Text>Customer Information</Text>
      </View>
      <View style={styles.customerinformationcontainer2}>
        <View style={{flexDirection: 'row'}}>
          <Text>Image</Text>
          <Text>Customer Name</Text>
        </View>
        <View>
          <Text>Navigation</Text>
        </View>
      </View>
      <View style={styles.customerinformationcontainer2}>
        <Text>
          Flat No. 102, Plot No. 53, Rishabh Residency, Kalyan Nagar Venture-3,
          Mothi Nagar, Hyderabad-500018
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  customerinformationmaincontainer: {
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  customerinformationcontainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
