import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Header from './Components/Header';
import SearchBar from './Components/Search';
import Categories from './Components/Categories';
import TaskList from './Components/TaskList';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Categories />
      <TaskList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  },
});
