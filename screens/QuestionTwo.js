import React, { useState, useCallback, useEffect } from "react";
import { Image, Platform, View, Button, StatusBar, StyleSheet, Text, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GiftedChat, Actions } from "react-native-gifted-chat";
import db from "../firebase";
import firebase from "@firebase/app";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import Mood from "../screens/Mood";

const orangeEllipse = require("../assets/orangeEllipse.png");
const greyBox = require("../assets/greyBox.png");
const celebration = require("../assets/celebration.png");
const anxious = require("../assets/anxious.png");
const potato = require("../assets/potato.png");
const chill = require("../assets/chill.png");
const card = require("../assets/card.png");
const nextCard = require("../assets/nextCard.png");
const previousCard = require("../assets/previousCard.png");
const cardHeader = require("../assets/cardHeader.png");

export default function QuestionTwo({navigation, route, Mood: Mood}){
  return(
    <View style={styles.container}>
      <Image source={card} style={styles.card}></Image>
      <Image source={nextCard} style={styles.nextCard}></Image>
      <Image source={previousCard} style={styles.previousCard}></Image>
      <Image source={cardHeader} style={styles.cardHeader}></Image>
      <Image source={greyBox} style={styles.greyBox1}></Image>
      <Image source={greyBox} style={styles.greyBox2}></Image>
      <Image source={greyBox} style={styles.greyBox3}></Image>
      <Image source={greyBox} style={styles.greyBox4}></Image>
      <Image source={celebration} style={styles.celebration}></Image>
      <Image source={anxious} style={styles.anxious}></Image>
      <Image source={potato} style={styles.potato}></Image>
      <Image source={chill} style={styles.chill}></Image>
      <View style={styles.blackRect}></View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Mood");
        }}
      >
        <ImageBackground source={orangeEllipse} style={styles.orangeEllipse}>
        <Text style={styles.continue}>
          Continue
        </Text>
        </ImageBackground>
      </TouchableOpacity>

      <Text style={styles.Pick}>
        Choose the Bitmoji you relate to the most!
      </Text>
      <Text style={styles.Celebration}>
        Celebration
      </Text>
      <Text style={styles.Anxious}>
        Anxious
      </Text>
      <Text style={styles.Potato}>
        Exhausted
      </Text>
      <Text style={styles.Chill}>
        Chill
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
  Celebration: {
    position: "absolute",
    width: 132,
    height: 23,
    left: 93,
    top: 389,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 18,
    color: "white",
  },
  Anxious: {
    position: "absolute",
    width: 133,
    height: 23,
    left: 252,
    top: 389,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 18,
    color: "white",
  },
  Potato: {
    position: "absolute",
    width: 132,
    height: 23,
    left: 111,
    top: 594,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 18,
    color: "white",
  },
  Chill: {
    position: "absolute",
    width: 133,
    height: 23,
    left: 267,
    top: 593,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 18,
    color: "#FFFFFF",
  },
  Pick: {
    position: "absolute",
    width: 251,
    height: 99,
    left: 82,
    top: 104,
    fontFamily: "Graphik",
    fontWeight: "600",
    fontSize: 30,
    lineHeight: 33,
    color: "#FFFFFF",
  },
  continue: {
    position: "absolute",
    width: 114,
    height: 41,
    left: 64,
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
    left: 40,
    top: 30,
    borderRadius: 20,
  },
  nextCard:{
    position:"absolute",
    width: 15,
    height: 670,
    left: 410,
    top: 30,
    borderRadius: 20,
  },
  previousCard:{
    position:"absolute",
    width: 15,
    height: 670,
    left: 0,
    top: 30,
    borderRadius: 20,
  },
  cardHeader:{
    position:"absolute",
    width: 115,
    height: 15,
    left: 150,
    top: 50,
  },
  orangeEllipse: {
    position: "absolute",
    width: 180,
    height: 45,
    left: 118,
    top: 730,
    borderRadius: 57,
  },
  greyBox1: {
    position: "absolute",
    width: 133,
    height: 149,
    left: 66,
    top: 232,
    opacity: .5,
  },
  greyBox2: {
    position: "absolute",
    width: 133,
    height: 149,
    left: 217,
    top: 232,
    opacity: .5,
  },
  greyBox3: {
    position: "absolute",
    width: 133,
    height: 149,
    left: 66,
    top: 437,
    opacity: .5,
  },
  greyBox4: {
    position: "absolute",
    width: 133,
    height: 149,
    left: 217,
    top: 437,
    opacity: .5,
  },
  celebration: {
    position: "absolute",
    width: 132,
    height: 132,
    left: 66,
    top: 249,
  },
  anxious: {
    position: "absolute",
    width: 133,
    height: 149,
    left: 210,
    top: 221,
  },
  potato: {
    position: "absolute",
    width: 122,
    height: 123,
    left: 72,
    top: 458,
  },
  chill: {
    position: "absolute",
    width: 144,
    height: 144,
    left: 213,
    top: 441,
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
