import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { MaterialIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

export default function ChatInput() {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <MaterialIcons name="emoji-emotions" size={24} color="black" />
        <TextInput
          style={styles.textInput}
          placeholder="Type a message..."
          placeholderTextColor="#888"
        />
        <MaterialIcons name="camera-alt" size={24} color="black" />
        <FontAwesome5 name="paperclip" size={24} color="black" />
      </View>
      <FontAwesome name="microphone" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    flexDirection: 'row', // Set the main axis to be horizontal
    justifyContent:'center',
  
  },
  leftView: {
    height:42,
    borderRadius:21,
    backgroundColor:'#FFF',
    flexidirection:'row',
    padding:7,
    paddingHorizontal:10,
    flex: 1, // Take up remaining space
    justifyContent:'center'
  },
  textInput: {
    color: '#4F4F4F',
   
    fontSize: 15,
    flex: 1, // Take up remaining space
  },
  camera: {
    width: 21,
    height: 21,
    marginHorizontal: 10,
    backgroundColor:'#4F4F4F',
  },
  clip: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  mic: {
    width: 42,
    height: 42,
    backgroundColor: '#007AFF',
    borderRadius: 21,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji:{
    color:'#272727',
    margin:10
  }
});
