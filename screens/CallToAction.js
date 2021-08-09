import React, { useState, useCallback, useEffect } from "react";
import { Image, Platform, View, Button, StatusBar, StyleSheet, Text, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GiftedChat, Actions } from "react-native-gifted-chat";
import db from "../firebase";
import firebase from "@firebase/app";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import Lounge from "../screens/Lounge";

const orangeEllipse = require("../assets/orangeEllipse.png");
const greyBox = require("../assets/greyBox.png");
const celebration = require("../assets/celebration.png");
const anxious = require("../assets/anxious.png");
const potato = require("../assets/potato.png");
const chill = require("../assets/chill.png");
const greyCircle = require("../assets/greyCircle.png");
const card = require("../assets/card.png");
const previousCard = require("../assets/previousCard.png");
const cardHeader = require("../assets/cardHeader.png");
const resources = require("../assets/Resources.png");

export default function CallToAction({navigation, route, Lounge: Lounge}){
  return(
    <View style={styles.container}>
      <Image source={card} style={styles.card}></Image>
      <Image source={previousCard} style={styles.previousCard}></Image>
      <Image source={cardHeader} style={styles.cardHeader}></Image>
      <ImageBackground source={resources} style={styles.moreResources}>
        <Text style={styles.resourcesText}>
          Resources
        </Text>
      </ImageBackground>
      <ImageBackground source={greyCircle} style={styles.greyCircle1}>
        <Text style={styles.one}>
          1.
        </Text>
      </ImageBackground>
      <ImageBackground source={greyCircle} style={styles.greyCircle2}>
        <Text style={styles.two}>
          2.
        </Text>
      </ImageBackground>
      <ImageBackground source={greyCircle} style={styles.greyCircle3}>
        <Text style={styles.three}>
          3.
        </Text>
      </ImageBackground>

      <TouchableOpacity
        onPress={() => {
          navigation.popToTop();
        }}
      >
        <ImageBackground source={orangeEllipse} style={styles.orangeEllipse}>
          <Text style={styles.done}>
          Done!
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.blackRect}></View>

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
      <Text style={styles.Walk}>
        Take a walk!
      </Text>
      <Text style={styles.text3}>
        Taking a walk can relieve the mind, and clear your head.
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
  one:{
    position: "absolute",
    width: 45,
    height: 38,
    left: 15,
    top: 7,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 33,
    lineHeight: 36,
    color: "#28899F",
  },
  two:{
    position: "absolute",
    width: 45,
    height: 38,
    left: 15,
    top: 7,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 33,
    lineHeight: 36,
    color: "#28899F",
  },
  three:{
    position: "absolute",
    width: 45,
    height: 38,
    left: 15,
    top: 7,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 33,
    lineHeight: 36,
    color: "#28899F",
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
  Walk: {
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
    width: 250,
    height: 112,
    left: 100,
    top: 90,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 33,
    lineHeight: 36,
    color: "#FFFFFF",
  },
  done: {
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
  resourcesText: {
    position: "absolute",
    width: 114,
    height: 41,
    left: 35,
    top: 7,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 17,
    color: "#FFFFFF",
  },
  orangeEllipse: {
    position: "absolute",
    width: 180,
    height: 45,
    left: 118,
    top: 730,
    borderRadius: 57,
  },
  moreResources: {
    position: "absolute",
    width: 144,
    height: 38,
    left: 140,
    top: 620,
    borderRadius: 57,
  },
  greyCircle1: {
    position: "absolute",
    width: 51,
    height: 51,
    left: 50,
    top: 240,
  },
  greyCircle2: {
    position: "absolute",
    width: 51,
    height: 51,
    left: 50,
    top: 361,
  },
  greyCircle3: {
    position: "absolute",
    width: 51,
    height: 51,
    left: 50,
    top: 460,
  },
  card:{
    position:"absolute",
    width: 345,
    height: 670,
    left: 40,
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
  blackRect: {
    position: "absolute",
    width: 500,
    height: 40,
    left: 0,
    top: 0,
    backgroundColor: "black",
  },
});
