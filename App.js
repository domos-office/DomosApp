import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [fontsLoaded] = useFonts({
    Dongle: require('./assets/fonts/Dongle-Regular.ttf'),
    'Dongle-Bold': require('./assets/fonts/Dongle-Bold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#131946' }}>
      <StatusBar style="light" />
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* Header Section */}
          <LinearGradient
            colors={['#5D56F3', '#1E90FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              height: '55%',
              paddingTop: 50,
              paddingHorizontal: 20,
              paddingBottom: 30,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              position: 'relative',
            }}
          >
            {/* Profile Circle */}
            <View
              style={{
                position: 'absolute',
                top: 50,
                right: 20,
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: 'white',
              }}
            />

            <Text
              style={{
                color: 'white',
                fontSize: 28,
                fontFamily: 'Dongle-Bold',
                textAlign: 'center',
                marginBottom: 10,
              }}
            >
              Hello, Sidrit Mucaj
            </Text>

            {/* Weather Info */}
            <View style={{ alignItems: 'center' }}>
              <Ionicons name="partly-sunny" size={72} color="white" />
              <Text
                style={{
                  fontSize: 72,
                  color: 'white',
                  fontFamily: 'Dongle-Bold',
                }}
              >
                24°
              </Text>
              <Text
                style={{
                  fontSize: 28,
                  color: 'white',
                  fontFamily: 'Dongle',
                }}
              >
                Shkoder, Albania
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  color: 'white',
                  marginTop: 5,
                  fontFamily: 'Dongle',
                }}
              >
                20th March 2025
              </Text>
            </View>
          </LinearGradient>

          {/* Your Homes Section */}
          <View style={{ paddingVertical: 30, alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 36,
                color: 'white',
                marginBottom: 20,
                fontFamily: 'Dongle-Bold',
              }}
            >
              Your Homes
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 20,
                alignItems: 'center',
              }}
            >
              {[
                'Main Building',
                "Ardita's Apartment",
                'Guest House',
                'Cottage',
                'Domos Office',
              ].map((label, index) => (
                <TouchableOpacity key={index} style={styles.card}>
                  <ImageBackground
                    source={require('./assets/card-placeholder.png')} // Replace with your own image path
                    style={styles.imageBackground}
                    imageStyle={{ borderRadius: 15 }}
                  >
                    <View style={styles.overlay} />
                    <Text style={styles.cardText}>{label}</Text>
                  </ImageBackground>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </ScrollView>

        {/* Sticky Bottom Navigation */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: 15,
            backgroundColor: '#1E215A',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <Ionicons name="home" size={24} color="white" />
          <Ionicons name="location-outline" size={24} color="white" />
          <Ionicons name="settings-outline" size={24} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  card: {
    width: 200,
    height: 200,
    marginRight: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(93, 86, 243, 0.4)', // Slight purple overlay
    borderRadius: 15,
  },
  cardText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Dongle-Bold',
    textAlign: 'center',
    zIndex: 1,
  },
};

import { StyleSheet } from 'react-native';
