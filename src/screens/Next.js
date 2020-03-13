import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Next = () => {

  return (
    <View style={styles.container}>
      <Text>This is Next Screen.</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})