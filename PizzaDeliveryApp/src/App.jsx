import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Home from './screens/Home'

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App