import React, { useState, useCallback, useEffect } from "react";
import { Image, Platform, View, Button, StatusBar, StyleSheet, Text, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GiftedChat, Actions } from "react-native-gifted-chat";
import db from "../firebase";
import firebase from "@firebase/app";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

const whiteEllipse = require("../assets/whiteEllipse.png");
const greyBox = require("../assets/greyBox.png");
const celebration = require("../assets/celebration.png");
const anxious = require("../assets/anxious.png");
const potato = require("../assets/potato.png");
const chill = require("../assets/chill.png");

export default function CallToAction(){
  return(
    <View style={styles.container}>
      <Image source={greyBox} style={styles.greyBox1}></Image>
      <Image source={greyBox} style={styles.greyBox2}></Image>
      <Image source={greyBox} style={styles.greyBox3}></Image>
      <Image source={greyBox} style={styles.greyBox4}></Image>
      <Image source={celebration} style={styles.celebration}></Image>
      <Image source={anxious} style={styles.anxious}></Image>
      <Image source={potato} style={styles.potato}></Image>
      <Image source={chill} style={styles.chill}></Image>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LoungeIntro");
        }}
      >
        <ImageBackground source={whiteEllipse} style={styles.whiteEllipse}>
        <Text style={styles.continue}>
          Continue
        </Text>
        </ImageBackground>
      </TouchableOpacity>

      <Text style={styles.MoodScale}>
        Pick the Bitmoji you relate to the most!
      </Text>
      <Text style={styles.Energy}>
        Celebration
      </Text>
      <Text style={styles.lowEnergy}>
        Anxious
      </Text>
      <Text style={styles.highEnergy}>
        Potato
      </Text>
      <Text style={styles.Focus}>
        Chill
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    paddingTop: StatusBar.currentHeight,
  },
  Energy: {
    position: "absolute",
    width: 224,
    height: 23,
    left: 51,
    top: 177,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 18,
    color: "white",
  },
  lowEnergy: {
    position: "absolute",
    width: 91,
    height: 20,
    left: 44,
    top: 248,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 15,
    color: "white",
  },
  highEnergy: {
    position: "absolute",
    width: 100,
    height: 20,
    left: 240,
    top: 248,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 15,
    color: "white",
  },
  Focus: {
    position: "absolute",
    width: 224,
    height: 23,
    left: 51,
    top: 305,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 18,
    color: "#FFFFFF",
  },
  MoodScale: {
    position: "absolute",
    width: 257,
    height: 55,
    left: 129,
    top: 104,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 30,
    lineHeight: 33,
    color: "#FFFFFF",
  },
  continue: {
    position: "absolute",
    width: 114,
    height: 41,
    left: 72,
    top: 12.5,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 17,
    color: "black",
  },
  whiteEllipse: {
    position: "absolute",
    width: 180,
    height: 45,
    left: 118,
    top: 624,
    borderRadius: 57,
  },
  greyBox1: {
    position: "absolute",
    width: 133,
    height: 149,
    left: 46,
    top: 252,
  },
  greyBox2: {
    position: "absolute",
    width: 133,
    height: 149,
    left: 197,
    top: 252,
  },
  greyBox3: {
    position: "absolute",
    width: 133,
    height: 149,
    left: 46,
    top: 457,
  },
  greyBox4: {
    position: "absolute",
    width: 133,
    height: 149,
    left: 197,
    top: 457,
  },
  celebration: {
    position: "absolute",
    width: 132,
    height: 132,
    left: 46,
    top: 269,
  },
  anxious: {
    position: "absolute",
    width: 133,
    height: 149,
    left: 184,
    top: 241,
  },
  potato: {
    position: "absolute",
    width: 122,
    height: 77,
    left: 52,
    top: 498,
  },
  chill: {
    position: "absolute",
    width: 174,
    height: 174,
    left: 173,
    top: 468,
  },
});
