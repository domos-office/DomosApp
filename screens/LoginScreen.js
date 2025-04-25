// LoginScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function LoginScreen() {
  const [fontsLoaded] = useFonts({
    Dongle: require('../assets/fonts/Dongle-Regular.ttf'),
    'Dongle-Bold': require('../assets/fonts/Dongle-Bold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Page Coming Soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#131946',
  },
  text: {
    fontSize: 48,
    color: 'white',
    fontFamily: 'Dongle-Bold',
  },
});
