import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [peoples, setPeoples] = useState([
    {name:'Rabiul', id:1},
    {name:'Hasan', id:2},
    {name:'Kawsar', id:3},
    {name:'Nasir', id:4},
    {name:'Basir', id:5},
    {name:'Rofiq', id:6},
    {name:'Jabbar', id:7},
    {name:'Mehedi', id:8},
    {name:'Rubel', id:9},
    {name:'Riyad', id:10}
  ])
  
  const clickHandler = (id) => {
    let afterRemovePeople = peoples.filter( (people) => people.id != id )
    setPeoples(afterRemovePeople);
  }
  
  return (
    <View style={styles.container}>
        <FlatList
          data={peoples}
          keyExtractor = { (item) => item.id }
          renderItem = { ( {item} ) => (
            <TouchableOpacity onPress={ () => clickHandler(item.id)  }>
               <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>            
          )}
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
  item : {
    flex:1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
