import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Touchable } from 'react-native'; // Import the Image component
import { TouchableOpacity } from 'react-native-web';

export default function ChatListItem({navigation}) {
  return (

    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://example.com/your-image-url.jpg', // Replace with your actual image URL
        }}
      />
      <TouchableOpacity style = {styles.Touchable} onPreess={()=>navigation.navigate('Chat')}>
      <View style={styles.rightContent}>
        <View style={styles.topText}>
          <Text style={styles.contactName}>Yoli</Text>
          <Text style={styles.time}>13:03</Text>
        </View>
        <View style={styles.bottomText}>
          <Text style={styles.msg}>Hey, I was thinking, You wanna</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counter}>3</Text>
          </View>
        </View>
      </View>
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  img: {
    width: 48, 
    height: 48, 
    backgroundColor:'#FFFf',
    borderRadius: 25, 
  },
  rightContent: {
    flex: 1, 
    marginLeft: 10,
    paddingVertical:5,
    justifyContent:'space-evenly',
  },
  topText: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  contactName: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'#E6E6E6',
  },
  Touchable:{
    flex:1
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  bottomText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  msg: {
    fontSize: 14,
    color: '#333',
  },
  counterContainer: {
    backgroundColor: 'red',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  counter: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
