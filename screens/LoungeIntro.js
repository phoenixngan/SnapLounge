import React, { useState, useCallback, useEffect } from "react";
import { Image, Platform, View, Button, StatusBar, StyleSheet, Text, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GiftedChat, Actions } from "react-native-gifted-chat";
import db from "../firebase";
import firebase from "@firebase/app";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

const orangeRect = require("../assets/orangeRect.png");
const bitmojiGuy = require("../assets/bitmojiGuy.png");
const blueEllipse = require("../assets/blueEllipse.png");

export default function LoungeIntro(){
  return(
    <View style={styles.container}>
      <Image source={orangeRect} style={styles.orangeRect}></Image>
      <Image source={bitmojiGuy} style={styles.bitmojiGuy}></Image>
      <Image source={blueEllipse} style={styles.blueEllipse}></Image>
      <Text style={styles.start}>
        Start
      </Text>
      <Text style={styles.heyThere}>
        Hey there!
      </Text>
      <Text style={styles.Welcome}>
        Welcome to Snap Lounge!
      </Text>
      <Text style={styles.text}>
        Take a break from your daily life to enjoy this little quiz!
        Answer these questions and reflect back on how your day went.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A45CFF",
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    position: "absolute",
    width: 231,
    height: 115,
    left: 92,
    top: 429,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 15,
    textAlign: "center",
    color: "white",
  },
  Welcome: {
    position: "absolute",
    width: 231,
    height: 115,
    left: 92,
    top: 399,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 19,
    textAlign: "center",
    color: "#643A00",
  },
  heyThere: {
    position: "absolute",
    width: 291,
    height: 137,
    left: 92,
    top: 88,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 48,
    lineHeight: 53,
    color: "#FFFFFF",
  },
  start: {
    position: "absolute",
    width: 114,
    height: 41,
    left: 161,
    top: 638,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 17,
    color: "#FFFFFF",
  },
  orangeRect: {
    position: "absolute",
    width: 274,
    height: 176,
    left: 71,
    top: 368,
  },
  bitmojiGuy: {
    position: "absolute",
    width: 180,
    height: 180,
    left: 120,
    top: 180,
  },
  blueEllipse: {
    position: "absolute",
    width: 180,
    height: 45,
    left: 118,
    top: 624,
    borderRadius: 57,
  },
});
