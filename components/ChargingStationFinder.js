import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export function ChargingStationCard({ station, onBook }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{station.name}</Text>
      <Text>{station.location}</Text>
      <Button title="Book Now" onPress={onBook} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    margin: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
