import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Switch,
  Slider,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function DevicesScreen({ route }) {
  const { room } = route.params; // Room name passed from RoomsScreen
  const navigation = useNavigation();

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
          Devices in {room}
        </Text>

        <View style={{ marginBottom: 30 }}>
          <Text style={{ color: 'white', fontFamily: 'Dongle' }}>Living Room Light</Text>
          <Switch value={true} />
        </View>

        <View style={{ marginBottom: 30 }}>
          <Text style={{ color: 'white', fontFamily: 'Dongle' }}>Bedroom TV</Text>
          <Switch value={false} />
        </View>

        <View style={{ marginBottom: 30 }}>
          <Text style={{ color: 'white', fontFamily: 'Dongle' }}>Thermostat</Text>
          <Slider
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={72}
            onValueChange={(value) => console.log(value)}
            style={{ width: '100%' }}
          />
        </View>

        {/* Bottom Navigation */}
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
            paddingVertical: 10,
            backgroundColor: '#1E215A',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <Ionicons name="home" size={24} color="white" />
          <Ionicons name="location-outline" size={24} color="white" />
          <Ionicons name="settings-outline" size={24} color="white" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
