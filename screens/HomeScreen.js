import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#131946' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
        </LinearGradient>

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
              <TouchableOpacity
                key={index}
                style={styles.card}
                onPress={() => navigation.navigate('Rooms', { houseName: label })}
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
