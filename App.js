import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('jhon');
  const [age, setAge]   = useState(1);
  return (
    <View style={styles.container}>
        <Text>My name is {name} and my age is {age} </Text>
        <Text>Enter your name</Text>
        <TextInput
          style={styles.inputbox}
          onChangeText={(val) => setName(val)}
        />

      <Text>Enter your age</Text>
        <TextInput
          keyboardType='numeric'
          style={styles.inputbox}
          onChangeText={(value) => setAge(value)}
        />

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
  inputbox : {
    borderColor: 'red',
    borderWidth: 1,
    width: 200,
    marginTop: 5,
    marginBottom : 5
  }
});
