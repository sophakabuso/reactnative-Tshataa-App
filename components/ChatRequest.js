import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function ChatRequest() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Message"
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Send Request</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:  220,
    width: 320,
    backgroundColor: '#FFF',
    borderRadius: 25,
    padding: 20,
   
  },
  textInput: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 15,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
