import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet, Button, Alert, TextInput, TouchableHighlight } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'

let addItem = item => {
    firebase.database().ref('/items').push({
      name: item,
    });
  };

export default function Scanner( {navigation} ) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleSubmit = () => {
    addItem(name);
    Alert.alert('Item saved successfully');
  };


  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    str = 'https://api.nal.usdCCa.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=' + id;
    console.log(str);
    addItem(calories);
  };

  let addItem = item => {
    firebase.database().ref('/items').push({
      name: item,
    });

  };

  const calories = () => {
    return fetch(str)
      .then((response) => response.json())
      .then((json) => {
        return json.nutrientNumber;
      })
  }
/*
  const TextInANest = () => {
    const [titleText, setTitleText] = useState("Calories:");
    const bodyText = calories;
  
  
    return (
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={onPressTitle}>
          {titleText}
          {"\n"}
          {"\n"}
        </Text>
        <Text numberOfLines={5}>{bodyText}</Text>
      </Text>
    );
  };
 */ 
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
