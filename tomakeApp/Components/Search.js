import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <View style={styles.searchInGeneral}>
      <View style={styles.searchEngine}>
        <View style={styles.searchInput}>
          <Image source={require('../assets/Vector.png')} style={styles.searchIcon} />
          <TextInput
            style={styles.minisearchInput}
            placeholder='Search'
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
          />
        </View>
      </View>
      <View style={styles.searchImage}>
        <Image source={require('../assets/Vector_1.png')} style={styles.filterImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchInGeneral: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 32,
  },
  searchEngine: {
    flex: 1,
    height: 48,
    backgroundColor: 'white',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 6,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  minisearchInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 8,
    fontSize: 16,
  },
  searchImage: {
    width: 50,
    height: 48,
    backgroundColor: '#F0522F',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  filterImage: {
    width: 28.3,
    height: 25.5,
  },
});
