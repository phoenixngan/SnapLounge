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
import Affirmations from "../screens/Affirmations";
import FriendsLounge from "../screens/FriendsLounge";
import Settings from "../screens/Settings";
import { useFonts } from 'expo-font';


const image = require("../assets/bitmojiLounge.png");
const cat = require("../assets/cat.png");
const checkIn = require("../assets/CheckInOutline.png");
const yellowCircle = require("../assets/yellowCircle.png");
const friends = require("../assets/friends.png");
const heart = require("../assets/heart.png");
const plant = require("../assets/plant.png");
const menu = require("../assets/Menu.png");
const search = require("../assets/Search.png");
const loungeIcon = require("../assets/LoungeIcon.png");
const background = require("../assets/Background.png");
const settings = require("../assets/settings.png");
const back = require("../assets/backSign.png");
const date = require("../assets/Date.png");

export default function Lounge({navigation, route, LoungeIntro: LoungeIntro}){

  return(
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={background} style={styles.background}></Image>
      <Image source={image} style={styles.image}></Image>
      <Image source={cat} style={styles.cat}></Image>
      <Image source={date} style = {styles.date}></Image>
      <Image source={plant} style={styles.plant}></Image>
      <View style={styles.blackRect}></View>
      <Image source={loungeIcon} style={styles.loungeIcon}></Image>


      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Settings");
        }}
      >
        <ImageBackground source={menu} style={styles.menu}>
          <Image source={settings} style={styles.settings}></Image>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("FriendsLounge");
        }}
      >
        <Image source={friends} style={styles.friends}></Image>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Affirmations");
        }}
      >
        <Image source={heart} style={styles.heart}></Image>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.popToTop();
        }}
      >
        <ImageBackground source={menu} style={styles.menu2}>
          <Image source={back} style = {styles.back}></Image>
        </ImageBackground>
      </TouchableOpacity>

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
  },
  background:{
    position: "absolute",
    width: 450,
    height: 900,
    left: 0,
    top: 0,
  },
  text: {
    position: "absolute",
    width: 182,
    height: 70,
    left: 175,
    top: 240,
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
    left: 175,
    top: 200,
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
    top: 420,
  },
  cat: {
    position: "absolute",
    width: 96,
    height: 84,
    left: 147,
    top: 650,
  },
  image3: {
    width: 231,
    height: 65,
    left: 92,
    top: 330,
  },
  friends: {
    position: "absolute",
    left: 41,
    top: 345,
    width: 35,
    height: 35,
  },
  heart: {
    position: "absolute",
    left: 341,
    top: 345,
    width: 35,
    height: 35,
  },
  plant: {
    position: "absolute",
    width: 91,
    height: 167,
    left: 32,
    top: 580,
  },
  menu: {
    position: "absolute",
    width: 35,
    height: 35,
    left: 370,
    top: 55,
  },
  menu2: {
    position: "absolute",
    width: 35,
    height: 35,
    left: 10,
    top: 55,
  },
  loungeIcon:{
    position: "absolute",
    width: 60,
    height: 60,
    left: 182,
    top: 60,
  },
  blackRect: {
    position: "absolute",
    width: 500,
    height: 40,
    left: 0,
    top: 0,
    backgroundColor: "black",
  },
  settings:{
    position: "absolute",
    width: 22,
    height: 22,
    left: 6.5,
    top: 6,
  },
  back:{
    position: "absolute",
    width: 13,
    height: 20,
    left: 9,
    top: 7,
  },
  date:{
    position: "absolute",
    width: 110,
    height: 110,
    left: 45,
    top: 185,
  }
});
