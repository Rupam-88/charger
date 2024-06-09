import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { ChargingStationCard } from '../components/ChargingStationFinder';

export default function StationFinderScreen({ navigation }) {
  const [stations, setStations] = useState([
    { id: '1', name: 'Station 1', location: 'Location 1' },
    { id: '2', name: 'Station 2', location: 'Location 2' },
    // Add more stations here
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={stations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChargingStationCard
            station={item}
            onBook={() => navigation.navigate('BookingConfirmation', { station: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
