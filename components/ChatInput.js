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
    backgroundColor: '#F4F6F8',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row', // Set the main axis to be horizontal
    alignItems: 'center', // Vertically center the content
  },
  leftView: {
    flexDirection: 'row', // Arrange elements horizontally
    alignItems: 'center', // Vertically center the content
    flex: 1, // Take up remaining space
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    flex: 1, // Take up remaining space
  },
  camera: {
    width: 24,
    height: 24,
    marginLeft: 10,
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
});
