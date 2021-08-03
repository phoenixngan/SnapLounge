import React, { useState, useCallback, useEffect } from "react";
import { Image, Platform, View, Button, StatusBar, StyleSheet, Text, ImageBackground} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GiftedChat, Actions } from "react-native-gifted-chat";
import db from "../firebase";
import firebase from "@firebase/app";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import LoungeIntro from "../screens/LoungeIntro";

const image = require("../assets/bitmojiLounge.png");
const cat = require("../assets/cat.png");
const checkIn = require("../assets/CheckInOutline.png");
const yellowCircle = require("../assets/yellowCircle.png");
const friends = require("../assets/friends.png");
const heart = require("../assets/heart.png");
const whiteCircle = require("../assets/whiteCircle.png");
const eyeBall = require("../assets/eyeball.png");

export default function Lounge({navigation, route, LoungeIntro: LoungeIntro}){
  return(
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Image source={image} style={styles.image}></Image>
      <Image source={cat} style={styles.image2}></Image>
      <Image source={yellowCircle} style={styles.image4}></Image>
      <Image source={yellowCircle} style={styles.image5}></Image>
      <Image source={friends} style={styles.image6}></Image>
      <Image source={heart} style={styles.image7}></Image>
      <Image source={whiteCircle} style={styles.image8}></Image>
      <Image source={eyeBall} style={styles.image9}></Image>
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
        Latest Mood
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
    backgroundColor: "#1EACD9",
    paddingTop: StatusBar.currentHeight,
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
    color: "#FFFFFF",
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
  image2: {
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
  image4: {
    position: "absolute",
    width: 35,
    height: 35,
    left: 336,
    top: 281,
  },
  image5: {
    position: "absolute",
    width: 35,
    height: 35,
    left: 36,
    top: 281,
  },
  image6: {
    position: "absolute",
    left: 41,
    top: 289.62,
    width: 24.84,
    height: 18.75,
  },
  image7: {
    position: "absolute",
    left: 341,
    top: 289.62,
    width: 23.84,
    height: 20.75,
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
});
