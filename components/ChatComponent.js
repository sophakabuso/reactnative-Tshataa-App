import { FlatList, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

export default function ChatComponent() {
  const userID = 'yoliINdd23';
 
  

  

const renderItem=({item , index})=>{
  //console.log(par);
  return(    
    <View >
      <View style={[
       styles.contentHolder,
       item.userID === userID ? styles.rightContent: styles.leftContent,
       texts[index - 1]?.userID === item.userID ? { marginBottom: -5 } : null
       ]}>
        <View style={[
          styles.textBox,
          item.userID === userID ? styles.rightText : styles.leftText,
          texts[index - 1]?.userID === item.userID ? { borderRadius: 15 } : null]}
        >
          <Text style={styles.text}>{item.text}</Text>
        </View>
        <View style={styles.timeSent}>
         <Text style={styles.whiteText}>1:36 AM</Text>
         {
            item.userID === userID && (<>
              <Entypo name='dot-single' color={'#FFF'} size={16} />
              <Text style={styles.whiteText}>Sent</Text>
            </>)
         }
        
        </View>
      </View>

    </View>
  )
}
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


  return (
    <View style={styles.container}>
    <FlatList
    data={texts}
    renderItem={renderItem}
    contentContainerStyle={{flexDirection: 'column-reverse'}}/>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
    overflow: 'hidden'
  },
  contentHolder:{
    width: 280,
    marginVertical: 10
  },
  rightContent:{
    alignSelf: 'flex-end',

  },
  leftContent:{

  },
  text:{
    color: '#EBEBEB',
    fontSize: 15
  },
  textBox:{
    padding: 10,
    width: 280,
    //margin: 10
  },
  rightText:{
    borderRadius: 15,
    borderBottomRightRadius: 0,
    backgroundColor: '#3F5973',
     alignSelf: 'flex-end'
  },
  leftText:{
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    backgroundColor: '#1EA0E5'

  },
  timeSent:{
  flexDirection: 'row',
  alignSelf: 'flex-end'
  },
  whiteText:{
    color: '#E4E4E4',
    fontSize: 12
  }
})