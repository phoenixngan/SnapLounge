import React, { useState, useCallback, useEffect } from "react";
import { Image, Platform, View, Button, StatusBar, StyleSheet, Text, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GiftedChat, Actions } from "react-native-gifted-chat";
import db from "../firebase";
import firebase from "@firebase/app";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import Lounge from "../screens/Lounge";

const whiteEllipse = require("../assets/whiteEllipse.png");
const greyCircle = require("../assets/greyCircle.png");

export default function Mood({navigation, route, Lounge: Lounge}){
  return(
    <View style={styles.container}>
      <Image source={greyCircle} style={styles.greyCircle1}></Image>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Lounge");
        }}
      >
        <ImageBackground source={whiteEllipse} style={styles.whiteEllipse}>
          <Text style={styles.Done}>
            Done
          </Text>
        </ImageBackground>
      </TouchableOpacity>

      <Text style={styles.Results}>
        Results
      </Text>
      <Text style={styles.Mood}>
        Mood:
      </Text>
      <Text style={styles.Affirmation}>
        Affirmation
      </Text>
      <Text style={styles.text}>
        Remember, take in one day at a time! It’s okay to take a step back sometimes to take care of yourself.
        We can only handle so much information at a time. You are doing the best you can!
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
  Mood: {
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
  Affirmation: {
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
  text: {
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
  Results: {
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
  Done: {
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
