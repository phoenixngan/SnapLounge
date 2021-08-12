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
import Bestie from "../screens/Bestie";
import { useFonts } from 'expo-font';

let background = require("../assets/friendsLounge.png");
let back = require("../assets/down.png");
let bestie = require("../assets/bestie.png");

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

      <TouchableOpacity
        onPress={()=>{
          navigation.navigate("Bestie");
        }}>
        <Image source={bestie} style={styles.bestie}></Image>
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
    width: 22,
    height: 12,
    left: 14,
    top: 70,
  },
  blackRect: {
    position: "absolute",
    width: 500,
    height: 40,
    left: 0,
    top: 0,
    backgroundColor: "black",
  },
  bestie:{
    position: "absolute",
    width: 48,
    height: 48,
    left: 20,
    top: 193,
  },
});
