import { Text, View , ScrollView} from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import  'react-native-gesture-handler';
import Stories from '../screenComponents/Stories';
import Post from '../screenComponents/Post';

const Home = () =>  {
   
    return (
      <View style={{backgroundColor:'white' , height:'100%'}}>
        <StatusBar backgroundColor='white' barStyle='dark-content' animated={true} />
        <View
        style={{
          justifyContent:"space-between",
          flexDirection:"row",
          paddingHorizontal:"15",
          alignItems:'center'

        }}
        >
          <FontAwesome name="plus-square-o" style={{fontSize:'24'}}/>
          <Text style={{  fontSize:'24' , fontWeight:'500'}}>
           Studygram
          </Text>
          <Feather  name='navigation' style={{fontSize:"24"}}/>
        </View>
        <ScrollView>
          <Stories/>
          <Post/>
        </ScrollView>
      </View>
    );
  
}
export default Home