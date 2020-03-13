import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default Home = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Button
        title="Open Next Screen"
        onPress={() => navigation.navigate('Next')}
      />
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