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
    backgroundColor: '#FFF',
    borderRadius:'15',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    backgroundColor: '#fff',
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
