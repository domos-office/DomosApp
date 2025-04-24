import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fontsLoaded] = useFonts({
    Dongle: require('../assets/fonts/Dongle-Regular.ttf'),
    'Dongle-Bold': require('../assets/fonts/Dongle-Bold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#131946' }}>
      <ImageBackground
        source={require('../assets/gradient.jpg')}
        style={{ flex: 1, padding: 20 }}
        resizeMode="cover"
      >
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>

        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <Image
            source={require('../assets/domos.al.png')}
            style={{ width: 80, height: 80, marginBottom: 10 }}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 28, color: 'white', fontFamily: 'Dongle-Bold' }}>
            FRADOMOS
          </Text>
          <Text style={{ color: 'white', fontFamily: 'Dongle' }}>
            Your Home. Your Domos.
          </Text>
        </View>

        <View
          style={{
            marginTop: 40,
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: 20,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: 'white', fontSize: 24, fontFamily: 'Dongle-Bold', marginBottom: 10 }}>
            Sign in
          </Text>

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email address"
            placeholderTextColor="#ccc"
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 10,
              marginBottom: 15,
              fontSize: 18,
            }}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="#ccc"
            secureTextEntry
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 10,
              marginBottom: 10,
              fontSize: 18,
            }}
          />

          <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
            <Text style={{ color: 'white', fontFamily: 'Dongle' }}>
              Forgot your password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#1E90FF',
              borderRadius: 20,
              paddingVertical: 10,
              marginTop: 15,
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Dongle-Bold' }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Dongle' }}>
            Create an account
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#1E90FF',
              borderRadius: 20,
              paddingVertical: 10,
              paddingHorizontal: 30,
              marginTop: 5,
            }}
          >
            <Text style={{ color: 'white', fontFamily: 'Dongle' }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
