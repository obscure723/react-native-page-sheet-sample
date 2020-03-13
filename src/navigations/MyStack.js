import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { Home, Next } from '../screens';

export default MyStack = () => {

  const Stack = createStackNavigator()

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}
      mode="modal"
      headerMode="none"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Next" component={Next} />
    </Stack.Navigator>
  )

}