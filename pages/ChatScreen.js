import React from 'react'
import { View, Text} from 'react-native-web'
import ChatComponent from '../components/ChatComponent'
import ChatInput from '../components/ChatInput'

const ChatScreen = ()=> {
  return (
     <View>
        <ChatComponent/>
        <ChatInput/>
     </View>
  )
}

const styles = StyleSheet.create({
   container:{
      backgroundColor:'#26394D',
   }
})

export default ChatScreen