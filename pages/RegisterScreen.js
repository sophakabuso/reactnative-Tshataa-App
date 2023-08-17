import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.appName}>Tshataa</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.container2a}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Full Name" />
            <TextInput style={styles.textInput} placeholder="Email" />
            <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} />
            <TextInput style={styles.textInput} placeholder="Confirm Password" secureTextEntry={true} />
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.signIn}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.signUpOpt}>
              <Text style={styles.noAccText}>Already have an account?</Text>
              <Text style={styles.signInText}>Sign In</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingVertical: 80,
    alignItems: 'center',
    backgroundColor: '#26394D',
  },
  container1: {
    flex: 1.2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontFamily: 'berkshire',
    fontSize: 54,
    color: 'gold',
    padding:40
  },
  container2: {
    flex: 2.8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2a: {
    height: 420,
    width: 320,
    backgroundColor: '#FFF',
    borderRadius: 25,
    padding: 20,
  },
  inputContainer: {
    height: 200,
    justifyContent: 'space-between', // Add this to space elements vertically
  },
  actionButton: {
    backgroundColor: '#007AFF',
    borderRadius: 15,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
   
  },
  textInput: {
    borderRadius: 15,
    height: 46,
    borderColor: '#007AFF',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
  signUpOpt: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  
  },
  noAccText: {
    fontSize: 16,
  },
  signInText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
    padding:10
  },
});