import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TaskItem({ taskName }) {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.ongoingTask3}>{taskName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: 'white',
    width: 340,
    height: 128,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ongoingTask3: {
    fontSize: 16,
    fontWeight: '700',
  },
});
