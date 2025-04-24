import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Dongle: require('../assets/fonts/Dongle-Regular.ttf'),
    'Dongle-Bold': require('../assets/fonts/Dongle-Bold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#131946' }}>
      <StatusBar style="light" />
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ImageBackground
            source={require('../assets/gradient.jpg')}
            style={{
              flex: 1,  // Make sure it takes up the full height
              paddingTop: 50,
              paddingHorizontal: 20,
              paddingBottom: 30,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              position: 'relative',
              overflow: 'hidden',
            }}
            imageStyle={{ borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}
          >
            {/* Logo Circle */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={{
                position: 'absolute',
                top: 50,
                left: 20,
                width: 40,
                height: 40,
                borderRadius: 20,
                overflow: 'hidden',
              }}
            >
              <Image
                source={require('../assets/domos.al.png')}
                style={{ width: '100%', height: '100%' }}
                resizeMode="contain"
              />
            </TouchableOpacity>

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
              <Text style={{ fontSize: 72, color: 'white', fontFamily: 'Dongle-Bold' }}>
                24°
              </Text>
              <Text style={{ fontSize: 28, color: 'white', fontFamily: 'Dongle' }}>
                Shkoder, Albania
              </Text>
              <Text style={{ fontSize: 24, color: 'white', marginTop: 5, fontFamily: 'Dongle' }}>
                20th March 2025
              </Text>
            </View>
          </ImageBackground>

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
              contentContainerStyle={{ paddingHorizontal: 20, alignItems: 'center' }}
            >
              {['Main Building', "Ardita's Apartment", 'Guest House', 'Cottage', 'FRADOMOS Office'].map((label, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.card}
                  onPress={() => navigation.navigate('Rooms', { home: label })}  // Pass home name to Rooms
                >
                  <ImageBackground
                    source={require('../assets/card-placeholder.png')}
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

        {/* Bottom Navigation */}
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


const styles = StyleSheet.create({
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
    backgroundColor: 'rgba(93, 86, 243, 0.4)',
    borderRadius: 15,
  },
  cardText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Dongle-Bold',
    textAlign: 'center',
    zIndex: 1,
  },
});
