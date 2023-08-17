import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'; // Import the Image component

export default function ChatListItem() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://example.com/your-image-url.jpg', // Replace with your actual image URL
        }}
      />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // To arrange the content in a row
    alignItems: 'center', // To vertically center the content
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  img: {
    width: 50, // Set the width of the image
    height: 50, // Set the height of the image
    backgroundColor:'#FFF',
    borderRadius: 25, // Make it a circle by setting half of the width/height as border radius
  },
  rightContent: {
    flex: 1, // To take up remaining space in the row
    marginLeft: 10,
  },
  topText: {
    flexDirection: 'row',
    justifyContent: 'space-between', // To evenly distribute items
    alignItems: 'center',
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
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
