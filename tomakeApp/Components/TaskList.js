import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

export default function TaskList() {
  const tasks = ['Mobile App Development', 'Web Development', 'Push Ups', 'Mobile App Development'];

  return (
    <>
      <View style={styles.task}>
        <Text style={styles.taskText}>Ongoing Task</Text>
      </View>
      <ScrollView>
        {tasks.map((task, index) => (
          <TaskItem key={index} taskName={task} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  task: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  taskText: {
    fontSize: 20,
    fontWeight: '700',
  },
});
