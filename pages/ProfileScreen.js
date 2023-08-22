import React from 'react';
import CameraIcon from '../assets/camera-solid.svg'; // Update the import path to match the actual path
import { StyleSheet, View, Image, Text, TextInput, Pressable } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://media.istockphoto.com/id/177374316/photo/old-lion.jpg?s=612x612&w=0&k=20&c=wzm7ffhggFVh-O5PFtemzatI57lJniP0Xdan_S-wqlw=',
            }}
          />
          <View style={styles.camContainer}>
            <Image style={styles.camIcon} source={{ uri: CameraIcon }} />
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Email" />
            <TextInput style={styles.textInput} placeholder="Name" />
            <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} />
            <TextInput style={styles.textInput} placeholder="Status" />
          </View>
          <View style={styles.actionContainer}>
            <Pressable style={styles.saveOpt}>
              <Text style={styles.saveText}>Save</Text>
            </Pressable>
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
    backgroundColor: '#26394D',
    alignItems: 'center',
  },
  topContainer: {
    height: 280,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  bottomContainer: {
    height: 380,
    width: '100%',

  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  imageContainer: {
    width: 200,
    height: 200,

  },
  camContainer: {
    height: 42,
    width: 42,
    backgroundColor: '#1EA0E5',
    position: 'absolute',
    top: 146,
    left: 146,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camIcon: {
    width: 24,
    height: 24,


  },
  innerContainer: {
    width: 320,
    height: 380,
    backgroundColor: '#FFF',
    borderRadius: 25,
    padding: 20,

  },
  saveOpt: {
    backgroundColor: '#1EA0E5',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,

  },
  textInput: {
    borderRadius: 15,
    borderColor: '#1EA0E5',
    borderWidth: 1,
    padding: 10,
    height: 46,
    marginVertical: 10,
  },
  actionContainer: {
    height:60,
    marginTop: 10,
    justifyContent: 'center',
    
  },
  saveText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
