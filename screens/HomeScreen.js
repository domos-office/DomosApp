import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export default function HomeScreen() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Dongle: require('../assets/fonts/Dongle-Regular.ttf'),
    'Dongle-Bold': require('../assets/fonts/Dongle-Bold.ttf'),
  });

  if (!fontsLoaded) return null;

  const homes = [
    'Main Building',
    "Ardita's Apartment",
    'Guest House',
    'FRADOMOS Office',
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#131946' }}>
      <StatusBar style="light" />
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/gradient.jpg')}
          style={styles.headerBackground}
          imageStyle={{
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            resizeMode: 'cover',
          }}
        >
          <TouchableOpacity
  onPress={() => navigation.navigate('Login')}
  style={{
    position: 'absolute',
    top: 40,
    left: 20,
    width: 30,
    height: 30,
    overflow: 'hidden',
  }}
>
  <Image
    source={require('../assets/domos.al.png')}
    style={{ width: '100%', height: '100%' }}
    resizeMode="contain"
  />
</TouchableOpacity>


          <Text style={styles.welcomeText}>Hello, Sidrit Mucaj</Text>

          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Ionicons name="partly-sunny" size={52} color="white" />
            <Text style={styles.tempText}>24°</Text>
            <Text style={styles.locationText}>Shkoder, Albania</Text>
            <Text style={styles.dateText}>20th March 2025</Text>
          </View>
        </ImageBackground>

        <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Text style={styles.sectionTitle}>Your Homes</Text>
          <View style={styles.cardRow}>
            {homes.map((label, index) => (
              <TouchableOpacity
                key={index}
                style={styles.card}
                onPress={() => navigation.navigate('Rooms', { home: label })}
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
          </View>
        </View>

        <View style={styles.bottomNav}>
          <Ionicons name="home" size={28} color="white" />
          <Ionicons name="location-outline" size={28} color="white" />
          <Ionicons name="settings-outline" size={28} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    height: 300,
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
  },
  logoBox: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 40, // Adjusted size
    height: 40, // Adjusted size
    overflow: 'hidden',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  loginCircle: {
    position: 'absolute',
    top: 40,
    right: 20,
    width: 50, // Adjusted size for the circle
    height: 50, // Adjusted size for the circle
    borderRadius: 25, // Makes it a circle
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: 'white',
    fontSize: 26,
    fontFamily: 'Dongle-Bold',
    textAlign: 'center',
  },
  tempText: {
    fontSize: 56,
    color: 'white',
    fontFamily: 'Dongle-Bold',
  },
  locationText: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Dongle',
  },
  dateText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Dongle',
  },
  sectionTitle: {
    fontSize: 32,
    color: 'white',
    fontFamily: 'Dongle-Bold',
    marginVertical: 10,
  },
  cardRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  card: {
    width: 130,
    height: 130,
    margin: 10,
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
    fontSize: 18,
    fontFamily: 'Dongle-Bold',
    textAlign: 'center',
    zIndex: 1,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#1E215A',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
