import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function BookingConfirmationScreen({ route, navigation }) {
  const { station } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking Confirmation</Text>
      <Text style={styles.details}>Station: {station.name}</Text>
      <Text style={styles.details}>Location: {station.location}</Text>
      <Button title="Proceed to Payment" onPress={() => alert('Payment Process')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  details: {
    fontSize: 18,
    marginBottom: 10,
  },
});
