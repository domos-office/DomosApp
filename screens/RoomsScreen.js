// RoomsScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';

export default function RoomsScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const homeName = route.params?.home || 'Home';

  const rooms = ['Living Room', 'Kitchen', 'Bedroom', 'Bathroom'];

  const [fontsLoaded] = useFonts({
    Dongle: require('../assets/fonts/Dongle-Regular.ttf'),
    'Dongle-Bold': require('../assets/fonts/Dongle-Bold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <ScrollView style={{ backgroundColor: '#131946', flex: 1 }}>
      <Text style={styles.header}>{homeName}</Text>
      <Text style={styles.subHeader}>Select a Room</Text>
      {rooms.map((room, index) => (
        <TouchableOpacity
          key={index}
          style={styles.roomCard}
          onPress={() => navigation.navigate('Devices', { room })}
        >
          <Text style={styles.roomText}>{room}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    color: 'white',
    fontSize: 48,
    textAlign: 'center',
    fontFamily: 'Dongle-Bold',
    marginTop: 40,
  },
  subHeader: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Dongle',
    marginBottom: 20,
  },
  roomCard: {
    backgroundColor: '#1E215A',
    marginHorizontal: 40,
    marginVertical: 10,
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  roomText: {
    fontSize: 28,
    color: 'white',
    fontFamily: 'Dongle-Bold',
  },
});