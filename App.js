import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native'

const data = [
  { id: 1, name: "Waleed" },
  { id: 2, name: "Zeeshan" },
  { id: 3, name: "Umair" },
  { id: 4, name: "Dani" }
]


export default function App() {

  const [dataFromState,setData] =useState(data)

  const item = ({item}) => {
    return (
      <View style={{flex:1,borderWidth:2,backgroundColor:'grey',padding:10}}>
        <Text style={{fontSize:20}}>{item.name}</Text>
      </View>
    )
  }

  const searchName=(input)=>{
   let data = dataFromState;
   let searchData =  data.filter((item)=>{
    return item.name.toLowerCase().includes(input.toLowerCase())
   });
   setData(searchData)
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <TextInput 
        style={{borderWidth:2,padding:10,margin:10,width:200}}
        placeholder='search Name'
        onChangeText={(input)=>{
          searchName(input)
        }}
        />
      </View>
      <FlatList
        data={dataFromState} renderItem={item} keyExtractor={(item, index) => index.toString()}
      />

    </View>
  )
}

const styles = StyleSheet.create({})