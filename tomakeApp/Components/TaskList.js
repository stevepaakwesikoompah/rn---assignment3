import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

export default function TaskList() {
  const tasks = ['Mobile App Development', 'Web Development', 'Push Ups', 'data Mining','Software Engineering','Data Science','Cyber security',
    'Data Analysis','Social Marketting','Politics','Lesgislative functions','Administrator','Project Manager','Data Modelling','Business analyst'
  ];

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
