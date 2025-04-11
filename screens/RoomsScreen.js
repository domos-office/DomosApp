import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function RoomsScreen({ route, navigation }) {
  const { houseName } = route.params;
  const rooms = ['Living Room', 'Bedroom', 'Kitchen'];

  return (
    <View style={{ flex: 1, backgroundColor: '#131946', padding: 20 }}>
      <Text style={{ color: 'white', fontSize: 36, fontFamily: 'Dongle-Bold' }}>
        {houseName}
      </Text>

      {rooms.map((room, index) => (
        <TouchableOpacity
          key={index}
          style={{
            padding: 20,
            marginVertical: 10,
            backgroundColor: '#1E215A',
            borderRadius: 15,
          }}
          onPress={() => navigation.navigate('Devices', { roomName: room })}
        >
          <Text style={{ color: 'white', fontSize: 28, fontFamily: 'Dongle' }}>
            {room}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
