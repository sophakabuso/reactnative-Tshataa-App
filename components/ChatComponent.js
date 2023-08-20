import { FlatList, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

export default function ChatComponent() {
  const userID = 'yoliINdd23';
  const texts = [
    {
      text: "Hi there!",
      userID: userID,
    },
    {
      text: "Hey, how's it going?",
      userID: "otherUserID",
    },
    // Add more sample messages here...
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <View
          style={[
            styles.contentHolder,
            item.userID === userID ? styles.rightContent : styles.leftContent,
            texts[index - 1]?.userID === item.userID ? { marginBottom: -5 } : null,
          ]}
        >
          <View
            style={[
              styles.textBox,
              item.userID === userID ? styles.rightText : styles.leftText,
              texts[index - 1]?.userID === item.userID ? { borderRadius: 15 } : null,
            ]}
          >
            <Text style={styles.text}>{item.text}</Text>
          </View>
          <View style={styles.timeSent}>
            <Text style={styles.whiteText}>1:36 PM</Text>
            {item.userID === userID && (
              <>
                <Entypo name="dot-single" color="#FFF" size={16} />
                <Text style={styles.whiteText}>Sent</Text>
              </>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={texts}
        renderItem={renderItem}
        contentContainerStyle={{ flexDirection: 'column-reverse' }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#EFEFF5', // Light gray background
  },
  contentHolder: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  textBox: {
    padding: 10,
  },
  leftText: {
    backgroundColor: '#D6D6D6', // Gray background for received messages
    borderRadius: 15,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 15,
    alignSelf: 'flex-start',
  },
  rightText: {
    backgroundColor: '#2EC4B6', // Teal background for sent messages
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 15,
    alignSelf: 'flex-end',
  },
  rightContent: {
    alignSelf: 'flex-end',
  },
  leftContent: {},
  timeSent: {
    marginLeft: 5,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  whiteText: {
    color: '#A0A0A0', // Light gray for timestamp and "Sent" label
    fontSize: 12,
    marginLeft: 5,
  },
  text: {
    color: '#FFF', // White text for message content
  },
});
