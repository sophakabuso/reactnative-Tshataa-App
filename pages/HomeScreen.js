import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Modal, Pressable, Text } from 'react-native';
import ChatListItem from '../components/chatListItem';
import ChatInput from '../components/ChatInput';
import ChatRequest from '../components/ChatRequest';
import FAB from '../components/FAB';
import ChatComponent from '../components/ChatComponent';

const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); // Set initial modal state to false

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible); // Toggle the modal state
  };

  return (
    <View style={styles.container}>
    {/*}  <ScrollView>
        <ChatListItem />
        <ChatInput />
      </ScrollView>

     
      <Modal transparent={true} visible={isModalVisible} onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <ChatRequest />
          <Pressable style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable>
        </View>
      </Modal>

      
      <Pressable style={styles.fabContainer} onPress={toggleModal}>
        <FAB />
      </Pressable>*/}
      <ChatComponent/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default HomeScreen;
