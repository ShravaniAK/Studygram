import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const Status = () => {

    const {name}=route.params;
    const {image}=route.params;
  return (
    <View style={{backgroundColor:"black", height:'100%',position:"relative",
    justifyContent:"center", alignItems:'center'
    }}>
      <StatusBar backgroundColor='black' bar-style='light-content'/>
      <View style={{height:3,
    width:'95%',
    borderWidth:1,
    backgroundColor:'grey',
    position:'absolute',
    top:18,
    }}>
<View style={{backgroundColor:'white',height:'100%',width:'50%',
}}>
    
</View>
      </View >
      <View>

     
      <View style={{bodrderRadius:100,
    width:30,
    heigth:30,
    justifyContent:'center',
    alignItems:'center'}}>
          <Image source={image} style={{borderRadius:100,
        backgroundColor:"orange",
        resizeMode:'cover',
        }}/>
      </View>
      </View>
      </View>
  )
}

export default Status