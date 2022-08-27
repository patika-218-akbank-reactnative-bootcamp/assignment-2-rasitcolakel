import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Message} from '../assets/messages';

type Props = {
  message: Message;
};

export default function MessageScreen({message}: Props) {
  const date = new Date(message.datetime);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return (
    <View style={styles.container}>
      <Text>{message.text}</Text>
      <Text style={styles.dateText}>{hours + ':' + minutes}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    padding: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  dateText: {
    alignSelf: 'flex-end',
    fontSize: 11,
    color: 'rgba(0,0,0,0.3)',
  },
});
