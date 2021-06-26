import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Card({seller, sellerkm, customer, customerkm, time}) {
  console.log(sellerkm + customerkm);
  return (
    <View style={styles.cardmaincontainer}>
      <View>
        <Text>{seller}</Text>
        <Text>{sellerkm}</Text>
      </View>
      <View>
        <Text>{customer}</Text>
        <Text>{customerkm}</Text>
      </View>
      <View>
        <Text>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardmaincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    marginBottom: 5,
    backgroundColor: '#fff',
  },
});
