import React, { useState, useCallback, useEffect } from "react";
import { Image, Platform, View, Button, StatusBar, StyleSheet, Text, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GiftedChat, Actions } from "react-native-gifted-chat";
import db from "../firebase";
import firebase from "@firebase/app";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

const whiteEllipse = require("../assets/whiteEllipse.png");
const greyCircle = require("../assets/greyCircle.png");

export default function Mood(){
  return(
    <View style={styles.container}>
      <Image source={greyCircle} style={styles.greyCircle1}>
        <Text style={styles.one}>
          1.
        </Text>
      </Image>

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

      <Text style={styles.Heres}>
        Here's some things that you can do!
      </Text>
      <Text style={styles.Break}>
        Break down your goals
      </Text>
      <Text style={styles.text1}>
        Breaking up your large tasks into smaller, more managable tasks makes things seem less overwhelming.
      </Text>
      <Text style={styles.Meditate}>
        Meditate and Breathe
      </Text>
      <Text style={styles.text2}>
        Take some time to find a comfortable position and focus on your breath.
      </Text>
      <Text style={styles.xxx}>
        XXX
      </Text>
      <Text style={styles.text3}>
        XXXX
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
  one:{
    position: "absolute",
    width: 45,
    height: 38,
    left: 56,
    top: 257,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 33,
    lineHeight: 36,
    color: "#000000",
  },
  two:{
    position: "absolute",
    width: 45,
    height: 38,
    left: 56,
    top: 369,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 33,
    lineHeight: 36,
    color: "#000000",
  },
  three:{
    position: "absolute",
    width: 45,
    height: 38,
    left: 56,
    top: 476,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 33,
    lineHeight: 36,
    color: "#000000",
  },
  Break: {
    position: "absolute",
    width: 207,
    height: 26,
    left: 113,
    top: 250,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 19,
    color: "white",
  },
  text1: {
    position: "absolute",
    width: 207,
    height: 61,
    left: 113,
    top: 276,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 15,
    color: "#000000",
  },
  Meditate: {
    position: "absolute",
    width: 207,
    height: 26,
    left: 113,
    top: 365,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 19,
    color: "white",
  },
  text2: {
    position: "absolute",
    width: 207,
    height: 61,
    left: 113,
    top: 391,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 15,
    color: "#000000",
  },
  xxx: {
    position: "absolute",
    width: 207,
    height: 26,
    left: 113,
    top: 470,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 19,
    color: "white",
  },
  text3: {
    position: "absolute",
    width: 207,
    height: 102,
    left: 113,
    top: 496,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 15,
    color: "#000000",
  },
  Heres: {
    position: "absolute",
    width: 276,
    height: 99,
    left: 53,
    top: 123,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 33,
    lineHeight: 36,
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
  greyCircle1: {
    position: "absolute",
    width: 51,
    height: 51,
    left: 50,
    top: 240,
  },
});