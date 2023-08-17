import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const HomeSearch = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F6F8',
    padding: 10,
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
  },
});

export default HomeSearch;
