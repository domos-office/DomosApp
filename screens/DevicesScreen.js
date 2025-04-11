import React from 'react';
import { View, Text } from 'react-native';

export default function DevicesScreen({ route }) {
  const { roomName } = route.params;
  const devices = ['Light', 'Thermostat', 'TV'];

  return (
    <View style={{ flex: 1, backgroundColor: '#131946', padding: 20 }}>
      <Text style={{ color: 'white', fontSize: 36, fontFamily: 'Dongle-Bold' }}>
        {roomName}
      </Text>

      {devices.map((device, index) => (
        <View
          key={index}
          style={{
            padding: 20,
            marginVertical: 10,
            backgroundColor: '#2A2E6E',
            borderRadius: 15,
          }}
        >
          <Text style={{ color: 'white', fontSize: 28, fontFamily: 'Dongle' }}>
            {device}
          </Text>
        </View>
      ))}
    </View>
  );
}
