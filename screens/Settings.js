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
import Push from "../screens/Push";
import Manage from "../screens/Manage";

let background = require("../assets/shadedBackground.png");
let back = require("../assets/doneBox.png");
let settingsModal = require("../assets/settingsModal.png");

export default function Settings({navigation, route}){
  return(
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={background} style={styles.background}></Image>
      <View style={styles.blackRect}></View>
      <Image source={settingsModal} style={styles.settingsModal}></Image>
      <View style={styles.line}></View>

      <TouchableOpacity
        onPress={()=>{
          navigation.goBack();
        }}>
        <ImageBackground source={back} style={styles.back}>
          <Text style={styles.text}> Done </Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{
          navigation.navigate("Push");
        }}>
        <Text style={styles.push}> Manage Push Notifications </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{
          navigation.navigate("Manage");
        }}>
        <Text style={styles.manage}> Manage Who Can See My Lounge </Text>
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
    top: -3,
  },
  back:{
    position: "absolute",
    width: 375,
    height: 44,
    left: 20,
    top: 800,
    borderRadius: 9,
  },
  text:{
    position: "absolute",
    width: 50,
    height: 40,
    left: 160,
    top: 12.5,
    fontFamily: "graphik",
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 19,
  },
  push:{
    position: "absolute",
    width: 230,
    height: 20,
    left: 40,
    top: 707,
    fontFamily: "graphik",
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 19,
  },
  manage:{
    position: "absolute",
    width: 280,
    height: 20,
    left: 40,
    top: 755,
    fontFamily: "graphik",
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 19,
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
  settingsModal:{
    position: "absolute",
    width: 375,
    height: 100,
    left: 20,
    top: 690,
    borderRadius: 9,
  },
  line:{
    position: "absolute",
    width: 375,
    height: 1,
    left: 20,
    top: 740,
    backgroundColor: "grey",
    opacity: .5,
  }
});
