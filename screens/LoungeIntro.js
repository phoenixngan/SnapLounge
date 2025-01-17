import React, { useState, useCallback, useEffect } from "react";
import { Image, Platform, View, Button, StatusBar, StyleSheet, Text, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GiftedChat, Actions } from "react-native-gifted-chat";
import db from "../firebase";
import firebase from "@firebase/app";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import QuestionOne from "../screens/QuestionOne";

const whiteRect = require("../assets/whiteRect.png");
const blackRect = require("../assets/blackRect.png");
const bitmojiGuy = require("../assets/bitmojiGuy.png");
const orangeEllipse = require("../assets/orangeEllipse.png");
const card = require("../assets/card.png");
const nextCard = require("../assets/nextCard.png");
const cardHeader = require("../assets/cardHeader.png");
const backButton = require("../assets/back.png");
const circles = require("../assets/Circles1.png");


export default function LoungeIntro({navigation, route, back, QuestionOne: QuestionOne}){
  return(
    <View style={styles.container}>
      <Image source={card} style={styles.card}></Image>
      <Image source={nextCard} style={styles.nextCard}></Image>
      <Image source={cardHeader} style={styles.cardHeader}></Image>
      <Image source={whiteRect} style={styles.whiteRect}></Image>
      <Image source={bitmojiGuy} style={styles.bitmojiGuy}></Image>
      <Image source={circles} style={styles.circles1}></Image>

      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image source={backButton} style={styles.back}></Image>
      </TouchableOpacity>

      <View style={styles.blackRect}></View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("QuestionOne");
        }}
      >
        <ImageBackground source={orangeEllipse} style={styles.orangeEllipse}>
        <Text style={styles.start}>
          Start!
        </Text>
        </ImageBackground>
      </TouchableOpacity>

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
    backgroundColor: "#0C0F60",
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    position: "absolute",
    width: 231,
    height: 115,
    left: 92,
    top: 570,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 15,
    textAlign: "center",
    color: "#38385B",
  },
  Welcome: {
    position: "absolute",
    width: 231,
    height: 115,
    left: 92,
    top: 525,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 19,
    textAlign: "center",
    color: "#38385B",
  },
  heyThere: {
    position: "absolute",
    width: 291,
    height: 137,
    left: 92,
    top: 170,
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
    left: 70,
    top: 12.5,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 17,
    color: "#FFFFFF",
  },
  card:{
    position:"absolute",
    width: 345,
    height: 670,
    left: 36,
    top: 90,
    borderRadius: 20,
  },
  nextCard:{
    position:"absolute",
    width: 15,
    height: 670,
    left: 402,
    top: 90,
    borderRadius: 20,
  },
  cardHeader:{
    position:"absolute",
    width: 115,
    height: 15,
    left: 150,
    top: 110,
  },
  whiteRect: {
    position: "absolute",
    width: 274,
    height: 176,
    left: 71,
    top: 500,
  },
  blackRect: {
    position: "absolute",
    width: 500,
    height: 40,
    left: 0,
    top: 0,
    backgroundColor: "black",
  },
  bitmojiGuy: {
    position: "absolute",
    width: 250,
    height: 250,
    left: 85,
    top: 235,
  },
  orangeEllipse: {
    position: "absolute",
    width: 180,
    height: 45,
    left: 120,
    top: 790,
    borderRadius: 57,
  },
  back:{
    position: "absolute",
    width: 69,
    height: 22,
    left: 30,
    top: 805,
  },
  circles1:{
    position: "absolute",
    width: 60,
    height: 7,
    left: 330,
    top: 809,
  }
});
