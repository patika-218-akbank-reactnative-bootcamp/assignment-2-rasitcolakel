import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Chat, chatList} from '../assets/messages';
import ChatComponent from '../components/Chat';

type RenderItemProps = {
  item: Chat;
};
const Home = () => {
  const fadeAnimTop = useRef(new Animated.Value(0)).current;
  const fadeAnimBottom = useRef(new Animated.Value(70)).current;
  const [initialHeight, setInitialHeight] = useState(0);
  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = e.nativeEvent.contentOffset.y;
    if (y > 30) {
      const newY = y / 2;
      const newBottomValue = newY > initialHeight ? 0 : initialHeight - newY;
      fadeAnimBottom.setValue(newBottomValue);
      const newTopValue = newBottomValue === 0 ? 1 : 1 - newBottomValue / 100;
      fadeAnimTop.setValue(newTopValue);
    } else {
      fadeAnimTop.setValue(0);
      fadeAnimBottom.setValue(initialHeight);
    }
  };
  const renderItem = ({item}: RenderItemProps) => <ChatComponent chat={item} />;
  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.actionsContainer}>
        <Text style={styles.blueText}>Düzenle</Text>
        <Animated.View style={{opacity: fadeAnimTop}}>
          <Text style={styles.titleTop}>Sohbetler</Text>
        </Animated.View>
        <Feather name="edit" style={styles.blueIcon} />
      </View>
      <Animated.View
        style={[
          styles.headerContainer,
          initialHeight ? {height: fadeAnimBottom} : {},
        ]}
        onLayout={e => {
          if (initialHeight) return;
          else {
            console.log(e.nativeEvent.layout);
            fadeAnimBottom.setValue(e.nativeEvent.layout.height);
            setInitialHeight(e.nativeEvent.layout.height);
          }
        }}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sohbetler</Text>
        </View>
        <View style={styles.actionsContainer}>
          <Text style={styles.blueText}>Toplu Mesaj Listeleri</Text>
          <Text style={styles.blueText}>Yeni Grup</Text>
        </View>
      </Animated.View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        stickyHeaderIndices={[0]}
        data={chatList}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
        onScroll={onScroll}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#fff',
    overflow: 'scroll',
  },
  actionsContainer: {
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 5,
  },
  blueText: {
    color: '#007AFF',
    fontSize: 16,
  },
  blueIcon: {
    color: '#007AFF',
    fontSize: 20,
  },
  titleContainer: {
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0,0.15)',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 27,
    marginTop: 10,
    marginBottom: 5,
  },
  titleTop: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentContainerStyle: {
    paddingBottom: 100,
  },
});
