import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { Button } from 'react-native-paper';

const App = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [mapType, setMapType] = useState('standard'); // initialize map type to standard

  useEffect(() => {
    (async () => {
      // Check permissions and request location permission if needed
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      // Get the user's current location
      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  // Function to update the map type when the button is clicked
  const handleMapTypeChange = () => {
    setMapType(mapType === 'standard' ? 'satellite' : 'standard');
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ height:"80%", top: "20%" }}
        initialRegion={{
          latitude: currentLocation ? currentLocation.latitude : 47.534719,
          longitude: currentLocation ? currentLocation.longitude : 7.642731,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        showsBuildings={true}
        mapType={mapType} // set the current map type
        customMapStyle={[]}
        followsUserLocation={true}
        moveOnMarkerPress={false}
        showsPointsOfInterest={false}
      >
      </MapView>

      {/* Button to change the map type */}
      <Button
        icon={mapType === 'standard' ? 'satellite-variant' : 'map'}
        mode="contained"
        onPress={handleMapTypeChange}
        style={styles.mapTypeButton}
        contentStyle={styles.mapTypeButtonContent}
        dark={false}
      >
        {mapType === 'standard' ? 'Sat' : 'Map'}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  mapTypeButton: {
    position: 'absolute',
    top: "21.5%",
    right: "50%",
    transform: [{translateX: 40}, {translateY: 0}],
    borderRadius: 24,
    elevation: 4,
    zIndex: 999,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  mapTypeButtonContent: {
    height: 39,
    width: 80,
  },
});

export default App;