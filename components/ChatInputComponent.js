
import React, { useRef, useState } from 'react';
import { Pressable, StyleSheet, TextInput, View, Text, Keyboard } from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Modal } from 'react-native';
import CameraComponent from './CameraComponent';
import { Camera } from 'expo-camera';

export default function ChatInputComponent({
  showEmoGifBoard, isBoardVisible, messageText, setMessageText, sendMessage,
  recordAudio, showMediaPicker, recording, pauseRecording, stopRecording,
  deleteRecording, isPaused, recordingTime
}) {
  const inputRef = useRef();
  const [isCamVisible, setIsCamVisible] = useState(false);
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);

  // Check Camera Permissions
  const checkCameraPermission = async () => {
    try {
      let status;
      status = (await Camera.getCameraPermissionsAsync()).status;
      if (status !== 'granted') {
        status = (await Camera.requestCameraPermissionsAsync()).status;
      }
      if (status === 'granted') {
        setIsCamVisible(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        visible={isCamVisible}
      >
        <CameraComponent closeCam={() => setIsCamVisible(false)} />
      </Modal>

      {/* Left Section */}
      <View style={styles.leftView}>
        {/* If not recording */}
        {!recording ? (
          <>
            {/* Show emoji/gif board or keyboard */}
            {isBoardVisible ? (
              <Pressable onPress={() => { showEmoGifBoard(false); inputRef.current.focus() }}>
                <MaterialIcons name='keyboard' size={24} style={styles.emoji} />
              </Pressable>
            ) : (
              <Pressable onPress={() => { showEmoGifBoard(true); Keyboard.dismiss() }}>
                <MaterialIcons name='emoji-emotions' size={24} style={styles.emoji} />
              </Pressable>
            )}

            {/* Text Input */}
            <TextInput
              ref={inputRef}
              style={styles.textInput}
              placeholder='Type a message'
              onChangeText={(text) => setMessageText(text)}
              value={messageText}
            />
            {/* Camera */}
            <Pressable onPress={() => checkCameraPermission()}>
              <MaterialIcons name='camera-alt' size={24} style={styles.camera} />
            </Pressable>
            {/* Media Picker */}
            <Pressable onPress={() => showMediaPicker()}>
              <FontAwesome name='paperclip' size={22} color={'#272727'} style={styles.clip} />
            </Pressable>
          </>
        ) : (
          // Recording UI
          <View style={styles.recordingContainer}>
            {isPaused ? (
              // Start Recording
              <Pressable onPress={() => recordAudio()}>
                <MaterialIcons name="fiber-manual-record" size={32} color="rgb(200, 80, 80)" style={[styles.pauseIcon, { top: -3 }]} />
              </Pressable>
            ) : (
              // Pause Recording
              <Pressable onPress={() => pauseRecording()}>
                <Ionicons name='pause' size={24} color={'black'} style={styles.pauseIcon} />
              </Pressable>
            )}

            {/* Recording Status */}
            <Text style={styles.text}>{isPaused ? "Paused" : " Recording..."}</Text>
            {/* Recording Time */}
            <View style={styles.recordingTime}>
              {recordingTime.hours > 0 && <Text style={styles.text}>{recordingTime.hours + ':'}</Text>}
              {hours && <Text style={styles.text}>{hours + ':'}</Text>}
              <Text style={styles.text}>{recordingTime.minutes + ':'}</Text>
              <Text style={styles.text}>{recordingTime.seconds}</Text>
            </View>

            {/* Stop Recording */}
            <Pressable onPress={() => stopRecording()}>
              <Ionicons name="stop" size={24} color="rgb(200, 80, 80)" style={styles.stopIcon} />
            </Pressable>
            {/* Delete Recording */}
            <Pressable onPress={() => deleteRecording()}>
              <MaterialIcons name="delete" size={24} color="rgb(200, 80, 80)" style={styles.deleteIcon} />
            </Pressable>
          </View>
        )}
      </View>

      {/* Microphone Container */}
      <View style={styles.micContainer}>
        {/* Show send button or microphone */}
        {recording || messageText ? (
          // Send Button
          <Pressable onPress={() => sendMessage()}>
            <MaterialIcons name='send' size={24} color={'black'} style={styles.mic} />
          </Pressable>
        ) : (
          // Microphone
          <Pressable onPress={() => recordAudio()}>
            <FontAwesome name='microphone' size={24} style={styles.mic} />
          </Pressable>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  leftView: {
    flex: 1,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    padding: 7,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  emoji: {
    color: '#272727',
    marginRight: 10
  },
  textInput: {
    fontSize: 15,
    color: '#4F4F4F',
    flex: 1
  },
  camera: {
    height: 21,
    width: 21,
    marginLeft: 10,
    marginRight: 20
  },
  clip: {
    height: 21,
    width: 21,
    justifyContent: 'center',
    alignItems: 'center'
  },
  micContainer: {
    height: 42,
    width: 42,
    borderRadius: 21,
    backgroundColor: '#FFF',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mic: {
    color: '#272727'
  },
  recordingContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  pauseIcon: {
    marginRight: 10,
    marginLeft: 5
  },
  recordingTime: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 5
  },
  text: {
    color: '#4F4F4F'
  },
  deleteIcon: {
    marginLeft: 5,
    marginRight: 5
  },
  stopIcon: {
    marginLeft: 5
  }
});
