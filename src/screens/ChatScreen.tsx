import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './Navigator';
import {Message} from '../assets/messages';
import MessageScreen from '../components/Message';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = NativeStackScreenProps<RootStackParamList, 'ChatScreen'>;

type RenderItemProps = {
  item: Message;
};

const ChatScreen = ({route, navigation}: Props) => {
  const {chat} = route.params;

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" style={styles.icon} />
      </Pressable>
      <Image
        source={{
          uri: chat.receiver.avatar,
        }}
        style={styles.avatar}
      />
      <Text style={styles.headerText}>{chat.receiver.firstName}</Text>
      <View style={styles.headerActionsContainer}>
        <Ionicons name="videocam-outline" style={styles.iconRight} />
        <Ionicons name="call-outline" style={styles.iconRight} />
      </View>
    </View>
  );

  const renderItem = ({item}: RenderItemProps) => (
    <MessageScreen message={item} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={'red'} />
      <FlatList
        ListHeaderComponent={renderHeader}
        stickyHeaderIndices={[0]}
        data={chat.messages}
        renderItem={renderItem}
        style={{
          backgroundColor: '#f2f2f2',
        }}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerContainer: {
    backgroundColor: '#fff',
    overflow: 'scroll',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgba(0,0,0,0.15)',
    borderBottomWidth: 1,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 15,
    flex: 1,
  },
  headerActionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginVertical: 5,
  },
  icon: {
    fontSize: 30,
    color: '#007AFF',
    marginRight: 10,
  },
  iconRight: {
    fontSize: 25,
    color: 'gray',
    marginLeft: 10,
    marginRight: 5,
  },
});
