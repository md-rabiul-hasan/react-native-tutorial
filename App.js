import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [players, setPlayers] = useState([
    {name: 'Neymar', key:1},
    {name: 'Messi', key:2},
    {name: 'Ronaldo', key:3},
    {name: 'Kaka', key:4},
    {name: 'Ibrahimovic', key:5},
    {name: 'Salah', key:6},
    {name: 'Jesus', key:7},
    {name: 'Starlin', key:8},
    {name: 'Rashford', key:9}
  ])
   return (
    <View style={styles.container}>
        <ScrollView>
          {
            players.map(item => (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            ))
          }
        </ScrollView>
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
  item : {
    backgroundColor: 'yellow',
    padding : 30,
    margin: 10,
    width: 500
  },  
  inputbox : {
    borderColor: 'red',
    borderWidth: 1,
    width: 200,
    marginTop: 5,
    marginBottom : 5
  }
});
