import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import * as firebase from 'firebase'
import 'firebase/firestore';
import Colors from '../utils/colors';




let addItem = item => {
  firebase.database().ref('/items').push({
    name: item,
  });
};

export default function AddRecipes() {
  const [name, onChangeText] = React.useState('');

  const handleSubmit = () => {
    addItem(name);
    Alert.alert('Item saved successfully');
  };

  const foodSearch = () => {
    alert(`Bar code number with data ${name} has been found!`);
    str = 'https://api.nal.usdCCa.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=' + id;
    addItem(str);
    Alert.alert('Item saved successfully');
  };

  const fda_api = () => {
    return fetch(str)
      .then((response) => response.json())
      .then((json) => {
        return json.nutrientNumber;
      })
  }

  const calories = fda_api;
  const TextInANest = () => {
    const [titleText, setTitleText] = useState("Calories:");
    const bodyText = calories;
  }
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Add Item</Text>
      <TextInput
        style={styles.itemInput}
        onChangeText={text => onChangeText(text)}
      />
      <TouchableHighlight
        style={styles.button}
        underlayColor="white"
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: Colors.mediumGrey,
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center',
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});