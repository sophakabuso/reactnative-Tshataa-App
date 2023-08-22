import { FlatList, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

export default function ChatComponent() {
  const userID = 'yoliINdd23';
 
  const texts = [
    {
        text: 'Hi there ',
        userID: 'userID'
    },
    {
        text: 'Why here',
        userID: 'assaffsafgdgwevc3'
    },
    {
        text: 'Why are we here',
        userID: 'otherUserID'
    },
    {
        text: 'Just wanted to say hello!',
        userID: 'userID'
    },
    {
        text: 'I think this place is interesting.',
        userID: 'assaffsafgdgwevc3'
    },
    {
        text: 'Do you have any thoughts about this?',
        userID: 'otherUserID'
    },
    {
        text: 'I agree, there seems to be a lot to explore.',
        userID: 'userID'
    },
    {
        text: 'Has anyone been here before?',
        userID: 'assaffsafgdgwevc3'
    },
    {
        text: 'I\'m not sure, but it\'s intriguing.',
        userID: 'otherUserID'
    },
    {
        text: 'Maybe we can find some answers together.',
        userID: 'userID'
    },
    {
        text: 'I love the mysterious atmosphere.',
        userID: 'assaffsafgdgwevc3'
    },
    {
        text: 'Let\'s uncover the secrets hidden here.',
        userID: 'otherUserID'
    },
    {
        text: 'Agreed! It\'s like a puzzle waiting to be solved.',
        userID: 'userID'
    },
    {
        text: 'Do you think there are others around?',
        userID: 'assaffsafgdgwevc3'
    },
    {
        text: 'Hard to say, but we can keep an eye out.',
        userID: 'otherUserID'
    },
    {
        text: 'I hope we find some answers soon.',
        userID: 'userID'
    },
    {
        text: 'Maybe the history of this place holds clues.',
        userID: 'assaffsafgdgwevc3'
    },
    {
        text: 'We should research and see what we can discover.',
        userID: 'otherUserID'
    },
    {
        text: 'I\'m excited to see where this journey leads.',
        userID: 'userID'
    },
    {
        text: 'Let\'s embrace the unknown and learn from it.',
        userID: 'assaffsaf 3'
    }
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
            {
              item.userID === userID &&(<>
              <Entypo name="dot-single" color="#FFF" size={16} />
                <Text style={styles.whiteText}>Sent</Text>
                </>)
            }
           
                
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
    width: 200
  },
  leftText: {
    backgroundColor: '#3F5973', // Gray background for received messages
    borderRadius: 15,
    borderBottomLeftRadius: 0,
  
   
  },
  rightText: {
    backgroundColor: '#3F5973', 
    borderRadius: 15,
    borderBottomLeftRadius: 0,
  
   
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
