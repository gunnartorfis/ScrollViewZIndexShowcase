import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.header} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.box}>
          <View style={styles.circle} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {height: 200, backgroundColor: 'orange', zIndex: 0},
  scrollView: {
    backgroundColor: 'pink',
    zIndex: 1,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'red',
  },
  box: {
    height: 1200,
    marginTop: -40,
  },
});

export default App;
