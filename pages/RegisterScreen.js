import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function RegisterScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.appName}>Tshataa</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.inputContainer}>
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
              <Text style={styles.signInText} onPress={()=>navigation.navigate('Login')}>Sign In</Text>
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
  topContainer: {
    flex: 1.2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontFamily: 'berkshire',
    fontSize: 48, 
    fontWeight:'bold',
    color:'#FFF'

  },
  bottomContainer: {
    flex: 2.8,
    
    justifyContent: 'center',
    
  },
  innerContainer: {
    height: 420,
    width: 320,
    backgroundColor: '#FFF',
    borderRadius: 25,
    padding: 20,
  },
  inputContainer: {
    flex:3,
   
   
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