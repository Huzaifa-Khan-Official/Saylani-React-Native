import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import Home from './screens/Home'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Home />
      {/* <AppNavigation /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App