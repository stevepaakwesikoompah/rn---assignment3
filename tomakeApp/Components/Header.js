import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.Devs}>
        <Text style={styles.headerText}>Hello, Devs</Text>
        <Text>14 Task today</Text>
      </View>
      <View style={styles.empty}></View>
      <View style={styles.Person}>
        <Image source={require('../assets/person.png')} style={styles.profileImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginBottom: 12,
    padding: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: '700',
  },
  Devs: {
    flex: 3,
  },
  empty: {
    flex: 2,
  },
  Person: {
    flex: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
  },
});