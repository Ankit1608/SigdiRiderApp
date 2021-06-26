import React from 'react';
import {View, Text} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Card from '../components/Card';
const cardData = [
  {
    id: '1',
    customer: 'Petla Porus',
    customerkm: '3KM',
    seller: 'Shreyas Kitchen',
    sellerkm: '5KM',
    time: '5:00 PM',
  },
  {
    id: '2',
    customer: 'Nasheela Rounak',
    customerkm: '3KM',
    seller: 'Tanzeels Kitchen',
    sellerkm: '5KM',
    time: '5:00 PM',
  },
];
export default function Orders({navigation}) {
  return (
    <View>
      {cardData.map(card => (
        <Pressable onPress={() => navigation.navigate('OrderDetail')}>
          <Card
            key={card.id}
            seller={card.seller}
            sellerkm={card.sellerkm}
            customer={card.customer}
            customerkm={card.customerkm}
            time={card.time}
          />
        </Pressable>
      ))}
    </View>
  );
}
