import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import AppButton from '../components/AppButton';
import Colors from '../utils/colors';
import useStatusBar from '../hooks/useStatusBar';
import { logout } from '../components/Firebase/firebase';

export default function HomeScreen({navigation}) {
  useStatusBar('dark-content');
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/food.png')} style={styles.logo} />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Manually Add Recipe" onPress={() => navigation.navigate('AddRecipes')} />
        <AppButton title="Scan to Add Recipe" onPress={() => navigation.navigate('Scanner')} />
        <AppButton
          title="View/Edit Recipes"
          color="secondary"
          onPress={() => navigation.navigate('ViewRecipes')}
        />
        <AppButton
          title="Sign Out"
          onPress={handleSignOut}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.mediumGrey
  },
  logoContainer: {
    position: 'absolute',
    top: 80,
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  buttonContainer: {
    bottom: 70,
    padding: 20,
    width: '100%'
  }
});