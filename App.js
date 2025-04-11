import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import HomeScreen from './screens/HomeScreen';
import RoomsScreen from './screens/RoomsScreen';
import DevicesScreen from './screens/DevicesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Dongle: require('./assets/fonts/Dongle-Regular.ttf'),
    'Dongle-Bold': require('./assets/fonts/Dongle-Bold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Rooms" component={RoomsScreen} />
        <Stack.Screen name="Devices" component={DevicesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
