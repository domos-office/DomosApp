import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [fontsLoaded] = useFonts({
    Dongle: require('./assets/fonts/Dongle-Regular.ttf'),
    'Dongle-Bold': require('./assets/fonts/Dongle-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // or a loading screen
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <Text style={styles.welcome}>Hello, Sidrit Mucaj</Text>
        <View style={styles.weatherBox}>
          <Text style={styles.temp}>24°</Text>
          <Text style={styles.location}>Shkoder, Albania</Text>
          <Text style={styles.date}>20th March 2025</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Homes</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>Main Building</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>Ardita's Apartment</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.bottomNav}>
        <Ionicons name="home" size={24} color="white" />
        <Ionicons name="location-outline" size={24} color="white" />
        <Ionicons name="settings-outline" size={24} color="white" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131946',
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#5D56F3',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  welcome: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Dongle',
    marginBottom: 10,
  },
  weatherBox: {
    alignItems: 'center',
  },
  temp: {
    fontSize: 64,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Dongle-Bold',
  },
  location: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Dongle',
  },
  date: {
    fontSize: 18,
    color: 'white',
    marginTop: 5,
    fontFamily: 'Dongle',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 28,
    color: 'white',
    marginBottom: 10,
    fontFamily: 'Dongle-Bold',
  },
  card: {
    marginRight: 15,
    backgroundColor: '#2B2E60',
    borderRadius: 15,
    overflow: 'hidden',
    width: 140,
  },
  cardImage: {
    height: 100,
    width: '100%',
  },
  cardText: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 20,
    fontFamily: 'Dongle',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#1E215A',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
