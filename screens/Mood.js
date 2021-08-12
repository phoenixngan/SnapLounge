import React, { useState, useCallback, useEffect } from "react";
import { Image, Platform, View, Button, StatusBar, StyleSheet, Text, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GiftedChat, Actions } from "react-native-gifted-chat";
import db from "../firebase";
import firebase from "@firebase/app";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import CallToAction from "../screens/CallToAction";

const orangeEllipse = require("../assets/orangeEllipse.png");
const card = require("../assets/card.png");
const nextCard = require("../assets/nextCard.png");
const previousCard = require("../assets/previousCard.png");
const cardHeader = require("../assets/cardHeader.png");
const shareButtons = require("../assets/shareButtons.png");
const overwhelmed = require("../assets/overwhelmedMood.png");

export default function Mood({navigation, route, CallToAction: CallToAction}){
  return(
    <View style={styles.container}>
      <Image source={card} style={styles.card}></Image>
      <Image source={nextCard} style={styles.nextCard}></Image>
      <Image source={previousCard} style={styles.previousCard}></Image>
      <Image source={cardHeader} style={styles.cardHeader}></Image>
      <Image source={shareButtons} style={styles.shareButtons}></Image>
      <Image source={overwhelmed} style={styles.overwhelmed}></Image>

      <View style={styles.blackRect}></View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CallToAction");
        }}
      >
        <ImageBackground source={orangeEllipse} style={styles.orangeEllipse}>
        <Text style={styles.continue}>
          Continue
        </Text>
        </ImageBackground>
      </TouchableOpacity>

      <Text style={styles.Results}>
        Results
      </Text>
      <Text style={styles.Mood}>
        Current Mood:
      </Text>
      <Text style={styles.MoodText}>
        Energy: Mid {"\n"}
        Focus: Slightly low
        Inner peace: Low
      </Text>
      <Text style={styles.Affirmation}>
        Affirmation
      </Text>
      <Text style={styles.text}>
        Remember, take in one day at a time! It’s okay to take a step back sometimes to take care of yourself. {"\n\n"}
        We can only handle so much information at a time. You are doing the best you can!
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
  Mood: {
    position: "absolute",
    width: 207,
    height: 26,
    left: 75,
    top: 250,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 21,
    lineHeight: 21,
    color: "white",
  },
  MoodText:{
    position: "absolute",
    width: 150,
    height: 100,
    left: 75,
    top: 280,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 25,
    color: "#FFFFFF",
  },
  Affirmation: {
    position: "absolute",
    width: 200,
    height: 30,
    left: 75,
    top: 420,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 28,
    lineHeight: 26,
    color: "#FFFFFF",
  },
  text: {
    position: "absolute",
    width: 260,
    height: 140,
    left: 75,
    top: 460,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
    color: "#FFFFFF",
  },
  Results: {
    position: "absolute",
    width: 276,
    height: 99,
    left: 153,
    top: 160,
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
    left: 57,
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
    left: 405,
    top: 90,
    borderRadius: 20,
  },
  previousCard:{
    position:"absolute",
    width: 15,
    height: 670,
    left: -3,
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
  orangeEllipse: {
    position: "absolute",
    width: 180,
    height: 45,
    left: 120,
    top: 790,
    borderRadius: 57,
  },
  shareButtons: {
    position: "absolute",
    width: 275,
    height: 36,
    left: 70,
    top: 670,
  },
  overwhelmed:{
    position: "absolute",
    width: 130,
    height: 130,
    left: 230,
    top: 240,
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
