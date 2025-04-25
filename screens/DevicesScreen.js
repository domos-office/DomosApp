import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DevicesScreen() {
  const [isLightOn, setIsLightOn] = useState(true);
  const [isTVOn, setIsTVOn] = useState(false);
  const [isThermostatOn, setIsThermostatOn] = useState(true);
  const [temperature, setTemperature] = useState(22);

  const toggleLight = () => setIsLightOn(previous => !previous);
  const toggleTV = () => setIsTVOn(previous => !previous);
  const toggleThermostat = () => setIsThermostatOn(previous => !previous);

  const increaseTemp = () => {
    if (isThermostatOn) setTemperature(temp => temp + 1);
  };

  const decreaseTemp = () => {
    if (isThermostatOn) setTemperature(temp => temp - 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={styles.header}>Devices</Text>

        {/* Light Device (horizontal alignment) */}
        <View style={styles.deviceBarHorizontal}>
          <Ionicons name="bulb-outline" size={30} color="white" />
          <Text style={styles.deviceText}>Light</Text>
          <Switch value={isLightOn} onValueChange={toggleLight} />
        </View>

        {/* TV Device (horizontal alignment) */}
        <View style={styles.deviceBarHorizontal}>
          <Ionicons name="tv-outline" size={30} color="white" />
          <Text style={styles.deviceText}>TV</Text>
          <Switch value={isTVOn} onValueChange={toggleTV} />
        </View>

        {/* Thermostat Device (vertical alignment) */}
        <View style={styles.deviceBar}>
          <View style={styles.thermostatTopRow}>
            <Ionicons name="thermometer-outline" size={30} color="white" />
            <Text style={styles.deviceText}>Thermostat</Text>
            <Switch value={isThermostatOn} onValueChange={toggleThermostat} />
          </View>

          <View style={styles.tempControlContainer}>
            <TouchableOpacity onPress={decreaseTemp} style={[styles.tempButton, !isThermostatOn && styles.disabled]}>
              <Text style={styles.tempButtonText}>-</Text>
            </TouchableOpacity>

            <View style={[styles.tempDisplay, !isThermostatOn && styles.disabled]}>
              <Text style={styles.tempText}>{temperature}°C</Text>
            </View>

            <TouchableOpacity onPress={increaseTemp} style={[styles.tempButton, !isThermostatOn && styles.disabled]}>
              <Text style={styles.tempButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131946',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  header: {
    fontSize: 42,
    color: 'white',
    fontFamily: 'Dongle-Bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  deviceBar: {
    flexDirection: 'column', // Stack items vertically for thermostat
    alignItems: 'center', // Center all content
    backgroundColor: '#1E215A',
    padding: 15,
    marginVertical: 10,
    borderRadius: 15,
    justifyContent: 'space-between',
  },
  thermostatTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  deviceText: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Dongle',
    flex: 1,
    marginLeft: 10,
  },
  tempControlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  tempButton: {
    backgroundColor: '#5D56F3',
    padding: 20,
    borderRadius: 50,
    opacity: 1,
  },
  tempButtonText: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Dongle-Bold',
  },
  tempDisplay: {
    backgroundColor: '#1E215A',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 20,
  },
  tempText: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Dongle-Bold',
  },
  disabled: {
    opacity: 0.4,
  },

  // Style for Light and TV device bars to maintain horizontal alignment
  deviceBarHorizontal: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center all content
    backgroundColor: '#1E215A',
    padding: 15,
    marginVertical: 10,
    borderRadius: 15,
    justifyContent: 'space-between',
  },
});
