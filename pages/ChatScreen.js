import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Pressable, Dimensions } from 'react-native'
import ChatComponent from '../components/ChatComponent'
import ChatInputComponent from '../components/ChatInputComponent'
import KeyboardComponent from '../components/KeyboardComponent'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import MediaPicker from '../components/MediaPicker'

function ChatScreen() {

  const [showEmoGifBoard, setShowEmoGifBoard] = useState(false);
  const [message, setMessage] = useState('');
  const [showMediaPicker, setShowMediaPicker] = useState(false);
  const [recording, setRecording] = useState();

  const handleEmoji = (emo) => {
    console.log(emo.emoji);
    setMessage(message => {
      return message += emo.emoji
    })

  }
  const sendMessage = () => {

  }
  const recordAudio = () => {
    setRecording(true);

  }


  useEffect(() => {
    console.log(message);
  }, [message])
  const handleGif = (url) => {
    console.log(url);

  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ChatComponent />
       {/*<MediaPicker isVisible={showMediaPicker}/>*/}
       <View style={styles.mediaPickerContainer}>
        <View style={styles.mediaPicker}>
          <View style={styles.iconContainer}>
            <Pressable>
            <MaterialIcons name="camera" size={30} color="#FFF" style={styles.icons}/>
            </Pressable>
            <Pressable>
              <MaterialIcons name="microphone" size={30} color="#FFF" style={styles.icons}/>
            </Pressable>


          </View>

        </View>
        </View>
                   

        <View style={styles.input}>
          <ChatInputComponent
            messageText={message}
            setMessageText={(text) => setMessage(text)}
            showEmoGifBoard={(bln) => setShowEmoGifBoard(bln)}
            isBoardVisible={showEmoGifBoard}
            sendMessage={() => sendMessage()}
            recordAudio={() => recordAudio()}
            showMediaPicker={() => setShowMediaPicker(!showMediaPicker)}
            recording={recording}

          />
        </View>

      </View>

      <KeyboardComponent
        isBoardVisible={showEmoGifBoard}
        handleEmoji={(emo) => handleEmoji(emo)}
        handleGif={(url) => handleGif(url)} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#26394D',
    flex: 1,
    overflow: 'hidden',


  },
  content: {
    flex: 1,
    paddingBottom: 60,

  },
  
  mediaPickerContainer:{
    height:120,
    width:'100%',
    padding:10,
    position:'absolute',
    bottom:60
  },
  mediaPicker:{
    heig:100,
    widht: Dimensions.get('window').width -20,
    backgroundColor:'#FFF',
    borderRadius:25,
    justifyContent: 'center',
    alignItems:'center'
  },
  iconContainer:{

  },

input: {
    position: 'absolute',
    bottom: 0,
    width: '100',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  }

})
export default ChatScreen