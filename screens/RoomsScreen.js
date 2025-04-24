import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function RoomsScreen({ route }) {
  const navigation = useNavigation();
  const { home } = route.params; // Home name passed from HomeScreen

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#131946' }}>
      <ImageBackground
        source={require('../assets/gradient.jpg')}
        style={{ flex: 1, padding: 20 }}
        resizeMode="cover"
      >
        <Text
          style={{
            fontSize: 36,
            color: 'white',
            fontFamily: 'Dongle-Bold',
            marginBottom: 20,
          }}
        >
          Rooms in {home}
        </Text>

        <ScrollView>
          {['Living Room', 'Bedroom', 'Kitchen'].map((room, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => navigation.navigate('Devices', { room: room })}  // Pass room name to Devices
            >
              <ImageBackground
                source={require('../assets/card-placeholder.png')}
                style={styles.imageBackground}
                imageStyle={{ borderRadius: 15 }}
              >
                <View style={styles.overlay} />
                <Text style={styles.cardText}>{room}</Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = {
  card: {
    width: 200,
    height: 200,
    marginBottom: 20,
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
};
