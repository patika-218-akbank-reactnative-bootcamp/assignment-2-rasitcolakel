import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {Chat} from '../assets/messages';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

type Props = {
  chat: Chat;
  onPress?: () => void;
};

export default function ChatComponent({chat, onPress}: Props) {
  const lastMessage = chat.messages[chat.messages.length - 1];
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: chat.receiver.avatar,
        }}
        style={styles.avatar}
      />
      <View style={styles.messageContainer}>
        <View style={styles.message}>
          <View style={styles.messageContainerTop}>
            <Text style={styles.name}>
              {chat.receiver.firstName + ' ' + chat.receiver.lastName}
            </Text>
            <Text style={styles.date}>{chat.receiver.lastName}</Text>
          </View>
          <View style={styles.messageContainerBottom}>
            <Text>{lastMessage.text}</Text>
          </View>
        </View>
        <EvilIcons name="chevron-right" style={styles.icon} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 30,
    margin: 11,
  },

  messageContainer: {
    flex: 1,
    borderBottomColor: 'rgba(0,0,0,0.15)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  message: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1,
  },
  messageContainerTop: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  name: {
    fontWeight: 'bold',
  },
  date: {
    fontWeight: '400',
    color: 'gray',
  },
  messageContainerBottom: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  },
  icon: {
    fontSize: 30,
    color: 'gray',
    marginRight: 11,
  },
});
