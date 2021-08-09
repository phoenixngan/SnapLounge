import React, { useState, useCallback, useEffect, Component } from "react";
import { Image, Platform, View, Button, StyleSheet, Text, ImageBackground, SafeAreaView, AppRegistry,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import { GiftedChat, Actions } from "react-native-gifted-chat";
import db from "../firebase";
import firebase from "@firebase/app";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import LoungeIntro from "../screens/LoungeIntro";
import { useFonts } from 'expo-font';


const image = require("../assets/bitmojiLounge.png");
const cat = require("../assets/cat.png");
const checkIn = require("../assets/CheckInOutline.png");
const yellowCircle = require("../assets/yellowCircle.png");
const friends = require("../assets/friends.png");
const heart = require("../assets/heart.png");
const whiteCircle = require("../assets/whiteCircle.png");
const eyeBall = require("../assets/eyeball.png");
const plant = require("../assets/plant.png");
const menu = require("../assets/Menu.png");
const addFriends = require("../assets/AddFriends.png");
const profile = require("../assets/Profile.png");
const search = require("../assets/Search.png");
const loungeIcon = require("../assets/LoungeIcon.png");
const background = require("../assets/Background.png");


export default function Lounge({navigation, route, LoungeIntro: LoungeIntro}){
  const [loaded] = useFonts({
    Graphik: require('../assets/Graphik-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }

  return(
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={background} style={styles.background}></Image>
      <Image source={image} style={styles.image}></Image>
      <Image source={cat} style={styles.cat}></Image>
      <Image source={friends} style={styles.friends}></Image>
      <Image source={heart} style={styles.heart}></Image>
      <Image source={whiteCircle} style={styles.image8}></Image>
      <Image source={eyeBall} style={styles.image9}></Image>
      <Image source={plant} style={styles.plant}></Image>
      <Image source={menu} style={styles.menu}></Image>
      <Image source={addFriends} style={styles.addFriends}></Image>
      <Image source={profile} style={styles.profile}></Image>
      <Image source={search} style={styles.search}></Image>
      <Image source={loungeIcon} style={styles.loungeIcon}></Image>
      <View style={styles.blackRect}></View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LoungeIntro");
        }}
      >
        <ImageBackground source={checkIn} style={styles.image3}>
        <Text style={styles.text2}>
          Check In
        </Text>
        </ImageBackground>
      </TouchableOpacity>
      <Text style={styles.text3}>
        Snap Lounge
      </Text>
      <Text style={styles.text}>
        Take the time to self reflect!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3F49AF",
    paddingTop: StatusBar.currentHeight,
  },
  background:{
    position: "absolute",
    width: 450,
    height: 830,
    left: 0,
    top: 0,
  },
  text: {
    position: "absolute",
    width: 182,
    height: 70,
    left: 178,
    top: 123,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 22,
    color: "#FFFFFF",
  },
  text2: {
    position: "absolute",
    width: 114,
    height: 41,
    left: 60,
    top: 20,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 26,
    textAlign: "center",
    color: "#4E59C0",
  },
  text3: {
    position: "absolute",
    width: 182,
    height: 57,
    left: 163,
    top: 180,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 20,
    color: "#2F2F3E",
  },
  image: {
    position: "absolute",
    width: 316,
    height: 316,
    left: 53,
    top: 342,
  },
  cat: {
    position: "absolute",
    width: 96,
    height: 84,
    left: 147,
    top: 559,
  },
  image3: {
    width: 231,
    height: 65,
    left: 87,
    top: 267,
  },
  friends: {
    position: "absolute",
    left: 41,
    top: 289.62,
    width: 35,
    height: 35,
  },
  heart: {
    position: "absolute",
    left: 341,
    top: 289.62,
    width: 35,
    height: 35,
  },
  image8: {
    position: "absolute",
    width: 110,
    height: 110,
    left: 38,
    top: 111,
  },
  image9: {
    position: "absolute",
    width: 39,
    height: 30,
    left: 365,
    top: 15,
  },
  plant: {
    position: "absolute",
    width: 91,
    height: 167,
    left: 32,
    top: 494,
  },
  menu: {
    position: "absolute",
    width: 35,
    height: 35,
    left: 334,
    top: 46,
  },
  addFriends: {
    position: "absolute",
    width: 35,
    height: 35,
    left: 289,
    top: 46,
  },
  profile: {
    position: "absolute",
    width: 46,
    height: 47,
    left: 1,
    top: 34,
  },
  search: {
    position: "absolute",
    width: 35,
    height: 35,
    left: 50,
    top: 44,
  },
  loungeIcon:{
    position: "absolute",
    width: 50,
    height: 50,
    left: 120,
    top: 50,
  },
  blackRect: {
    position: "absolute",
    width: 500,
    height: 40,
    left: 0,
    top: 0,
    backgroundColor: "black",
  },
});
