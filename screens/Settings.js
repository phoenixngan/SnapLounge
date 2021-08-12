import React, { useState, useCallback, useEffect, Component } from "react";
import { Image, Platform, View, Button, StyleSheet, Text, ImageBackground, SafeAreaView, AppRegistry,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import { GiftedChat, Actions } from "react-native-gifted-chat";
import db from "../firebase";
import firebase from "@firebase/app";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import Lounge from "../screens/Lounge";
import { useFonts } from 'expo-font';
import FastImage from 'react-native-fast-image'

let background = require("../assets/SavedAffirmations.png");
let back = require("../assets/down.png");

export default function Affirmations({navigation, route}){
  return(
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={background} style={styles.background}></Image>
      <View style={styles.blackRect}></View>
      <TouchableOpacity
        onPress={()=>{
          navigation.goBack();
        }}>
        <Image source={back} style={styles.back}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3F49AF",
  },
  background:{
    position: "absolute",
    width: 415,
    height: 900,
    left: 0,
    top: 0,
  },
  back:{
    position: "absolute",
    width: 22.5,
    height: 12.5,
    left: 356.4,
    top: 194,
  },
  blackRect: {
    position: "absolute",
    width: 500,
    height: 40,
    left: 0,
    top: 0,
    backgroundColor: "black",
  },
  image:{
    position: "absolute",
    width: 500,
    height: 500,
    left: 50,
    top: 50,
    backgroundColor: "black",
  },
});
