import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import {useNavigation} from '@react-navigation/native';
import Entypo from "react-native-vector-icons/Entypo";
// import { Link } from 'react-router-dom';

const Stories = () => {

    const navigation = useNavigation();
  const StoryInfo = [
    {
      id: "1",
      name: "your story",
      image: require("../../assets/dhruv.jpeg"),
    },
    {
      id: "0",
      name: "your story",
      image: require("../../assets/akhilesh.jpeg"),
    },
    {
      id: "2",
      name: "your story",
      image: require("../../assets/anmol.jpeg"),
    },
    {
      id: "3",
      name: "your story",
      image: require("../../assets/kalash.jpeg"),
    },
    {
      id: "4",
      name: "your story",
      image: require("../../assets/ankur.jpeg"),
    },
    {
      id: "5",
      name: "your story",
      image: require("../../assets/madhur.jpeg"),
    },
    {
      id: "6",
      name: "your story",
      image: require("../../assets/mugdha.jpeg"),
    },
    {
      id: "7",
      name: "your story",
      image: require("../../assets/dhruv.jpeg"),
    },
    {
      id: "8",
      name: "your story",
      image: require("../../assets/rizvi.jpeg"),
    },
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: "20", marginTop: 20 }}
    >
      {StoryInfo.map((data, index) => {
        return (
        //   <TouchableOpacity key={index} onPress={ () => navigation.push("Status",
          
        //   {

        //     name:data.name,
        //     image:data.image,
        //   })}>
        <TouchableOpacity key={index}>
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: "8",
                position: "relative",
                margin: 6,
              }}
            >
              {data.id == 1 ? (
                <View
                  style={{
                    bottom: 15,
                    position: "absolute",
                    right: 10,
                    zIndex: "1",
                  }}
                >
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      borderRadius: 100,
                      backgroundColor: "white",
                      color: "#405de6",
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: "white",
                  borderWidth: "2",
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <Image
                  source={data.image}
                  style={{
                    resizeMode: "cover",
                    width: "100%",
                    height: "100%",
                    borderRadius: 10,
                    backgroundColor: "purple",
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: "10",
                  opacity: data.id == 0 ? 1 : 0.5,
                }}
              >
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
