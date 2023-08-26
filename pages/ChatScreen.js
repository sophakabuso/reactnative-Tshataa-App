 import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Pressable, Dimensions } from 'react-native'
import ChatComponent from '../components/ChatComponent'
import ChatInputComponent from '../components/ChatInputComponent'
import KeyboardComponent from '../components/KeyboardComponent'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import MediaPicker from '../components/MediaPicker'
import {Audio} from 'expo-av'
let audioRecording

function ChatScreen() {

  const [showEmoGifBoard, setShowEmoGifBoard] = useState(false);
  const [message, setMessage] = useState('');
  const [showMediaPicker, setShowMediaPicker] = useState(false);
  const [recording, setRecording] = useState();
  const [IsPaused, setIsPaused] = useState();
  const [recordngTime, setRecordingTime] = useState({hours:0, minutes: 0, seconds: 0})
  const handleEmoji = (emo) => {
    console.log(emo.emoji);
    setMessage(message => {
      return message += emo.emojis
    })

  }
  const sendMessage = () => {

  }
  const updateTime = (mils) => {
    console.log(mils)
    const time = {
      hours: Math.floor((mils.durationMillis /(1000 * 60 *60))),
      minutes: Math.floor((mils.durationMillis /(1000 *60))%60),
      seconds: Math.floor((mils.durationMillis / 1000)%60)
    }
    setRecordingTime(time);
    console.log(time)
  }
  const recordAudio = async()  => {
    try {
      if(!IsPaused){
        await Audio.requestPermissionsAsync();
        const rec = new Audio.Recording();
        await rec.prepareToRecordAsync();
        rec.setOnRecordingStatusUpdate(updateTime)
   
        audioRecording=rec
        
      }
      await audioRecording.startAsync()
      setIsPaused(false)
      setRecording(true)
    } catch(error) {

    }
    
 }
 const pauseRecording = async() => {
  await audioRecording.pauseAsync();
  setIsPaused(true)
 }
 const stopRecording = async() => {
  await audioRecording.stopAndUnloadAsync();
  const uri = audioRecording.getURI();
  audioRecording = null
  console.log(uri);
  setIsPaused(false);
  setRecording(false)

 }
 const deleteRecording = async() => {
  await audioRecording.stopAndUnloadAsync();
  setRecording(false);
  setIsPaused(false)
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
        
        <MediaPicker isVisible={showMediaPicker}/>
        

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
            recordingPaused = {IsPaused}
            pauseRecording = {() =>pauseRecording()}
            IsPaused= {IsPaused}
            stopRecording={() => stopRecording()}
            deleteRecording={() => deleteRecording()}
            recordngTime={recordngTime}
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
    backgroundColor:'#1EA0E5',
    borderRadius:'24',
    height: 48,
    width: 48,
    justifyContent:'center',
    alignItems:'center',
    marginLeft: 20

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