import { View, Text, Image } from "react-native";
import * as React from "react";
// import { atan } from "react-native-reanimated";
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionic from 'react-native-vector-icons/Ionicons';
import {useState} from "react";


const Post = () => {
  const PostInfo = [
    {
        index:1,
      postTitle: "ehjebhj ehjdeebh",
      postPersonImage: require("../../assets/dhruv.jpeg"),
      postImage:require("../../assets/s1.jpeg"),
      likes: 756,
      isLiked: false,
    },
    {
        postTitle: "ehjebhj ehjdeebh",
        postPersonImage: require("../../assets/madhur.jpeg"),
        postImage:require("../../assets/s2.png"),
        likes: 756,
        isLiked: false,
      },
      {
        postTitle: "ehjebhj ehjdeebh",
        postPersonImage: require("../../assets/mugdha.jpeg"),
        postImage:require("../../assets/s3.jpeg"),
        likes: 756,
        isLiked: false,
      },
      {
        postTitle: "ehjebhj ehjdeebh",
        postPersonImage: require("../../assets/anmol.jpeg"),
        postImage:require("../../assets/s4.jpeg"),
        likes: 756,
        isLiked: false,
      },
  ];
  
  return (
    <View>
      {PostInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
        return (
           
          <View
            key={index}
            style={{
              paddingBottom: 10,
              borderBottomColor: "grey",
              borderBottomWidth: 0.1,
            }}
          >
            <View style={{flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',padding:15}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Image
                source={data.postPersonImage}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                }}
              />
           
            <View style={{padding:5}}>
              <Text style={{fontSize:15, fontWeight:'bold'}}>
                  
                  {data.postTitle}
              
              </Text>
            </View>
          </View>
          <Feather name="more-vertical" style={{fontSize:20}}/>
          </View>
          <View style={{
              position:'relative',
              justifyContent:'center',
              alignItems:'center'
          }}>
              <Image source={data.postImage} style={{width:'100%',
            height:400}}/>
        </View>
       

        <View style={{
            flexDirection:'column',
            justifyContent:'space-between',
            // alignItems:'center',
            paddingHorizontal:10,
            paddingVertical:15,
        }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>

                <TouchableOpacity onPress={()=>setLike(!like)}>
                    <AntDesign
                    name={like?'heart' :'hearto'}
                    style={{
                        paddingRight:10,
                        fontSize:20,
                        color:like? 'red' : 'black'
                    }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionic name='ios-chatbubble-outline'
                    style={{
                        fontSize:20,
                        paddingRight:10
                    }}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name='navigation'
                    style={{
                        fontSize:20,
                      
                    }}/>
                </TouchableOpacity>
            </View>
            {/* <View>

            <Feather name="bookmark" style={{fontSize:20}}/>
             </View> */}
           <Text>
               Liked by {like ? "you and" : ''} {''}
               {like ? data.likes +1 : data.likes} others
           </Text>
           <Text style={{fontWeight:800, fontSize:14,
        paddingVertical:2}}>
               please like if you enjoy the post
           </Text>
           <Text style={{opacity:0.4,paddingVertical:2}}>
               view all comments
           </Text>
            </View>
        </View>
       
       
        );
      })}
    </View>
  );
};

export default Post;










//const [toggled, setToggled] = useState(false);
// const toggle = () => {
//   setToggled(!toggled);
// const contextValue = {
//    toggled: toggled,
//    toggle: toggle,
// };

