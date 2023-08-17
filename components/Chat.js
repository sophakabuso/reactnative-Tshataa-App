import { FlatList, StyleSheet, View, Text } from 'react-native';
import React from 'react';

export default function Chat() {
  const userID = 'yoliINdd23';

  // Simulated data (Replace this with actual data from a server or database)
  const textData = `Hello|user123
How are you?|yoliINdd23
I'm good, thanks!|user123
`;

  const textLines = textData.split('\n');
  const texts = textLines.map((line) => {
    const [text, lineUserID] = line.split('|');
    return { text, userID: lineUserID };
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={texts}
        renderItem={({ item }) => (
          <View
            style={[
              styles.textBox,
              item.userID === userID ? styles.rightText : styles.leftText,
            ]}
          >
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textBox: {
    padding: 10,
  },
  leftText: {
    backgroundColor: '#EFEFEF',
    borderRadius: 15,
    borderBottomRightRadius: 0,
    alignSelf: 'flex-start',
  },
  rightText: {
    backgroundColor: '#DCF8C6',
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    alignSelf: 'flex-end',
  },
});
