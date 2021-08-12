import React, { useState, useCallback, useEffect } from "react";
import { Image, Platform, View, Button, StatusBar, StyleSheet, Text, ImageBackground,  KeyboardAvoidingView, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GiftedChat, Actions } from "react-native-gifted-chat";
import db from "../firebase";
import firebase from "@firebase/app";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import QuestionOne from "../screens/QuestionOne";
import Mood from "../screens/Mood";

const whiteRect = require("../assets/whiteRect.png");
const blackRect = require("../assets/blackRect.png");
const bitmojiGuy = require("../assets/bitmojiGuy.png");
const orangeEllipse = require("../assets/orangeEllipse.png");
const card = require("../assets/card.png");
const nextCard = require("../assets/nextCard.png");
const cardHeader = require("../assets/cardHeader.png");
const backButton = require("../assets/back.png");
const circles = require("../assets/Circles6.png");
const gratitude = require("../assets/Gratitude.png");
const inputBox = require("../assets/InputBox.png");


export default function QuestionFive({navigation, route, back, Mood: Mood}){
  return(
    <View style={styles.container}>
      <Image source={card} style={styles.card}></Image>
      <Image source={nextCard} style={styles.nextCard}></Image>
      <Image source={cardHeader} style={styles.cardHeader}></Image>
      <Image source={circles} style={styles.circles1}></Image>
      <Image source={gratitude} style={styles.gratitude}></Image>
      <Image source={inputBox} style={styles.inputBox}></Image>

      <KeyboardAvoidingView behavior="position">
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Share something here!"
          />
        </View>
      </KeyboardAvoidingView>

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
          navigation.navigate("Mood");
        }}
      >
        <ImageBackground source={orangeEllipse} style={styles.orangeEllipse}>
        <Text style={styles.done}>
          Done!
        </Text>
        </ImageBackground>
      </TouchableOpacity>

      <Text style={styles.grateful}>
        What is something you're grateful for?
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
  grateful: {
    position: "absolute",
    width: 291,
    height: 137,
    left: 80,
    top: 185,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 30,
    lineHeight: 31,
    color: "#FFFFFF",
  },
  done: {
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
    left: 405,
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
  inputBox: {
    position: "absolute",
    width: 251,
    height: 258,
    left: 82,
    top: 270,
  },
  gratitude:{
    position: "absolute",
    width: 260,
    height: 150,
    left: 90,
    top: 580,
  },
  blackRect: {
    position: "absolute",
    width: 500,
    height: 40,
    left: 0,
    top: 0,
    backgroundColor: "black",
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
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    width: 220,
    height: 35,
    top: 415,
    left: 98,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    justifyContent: "center",
    flex: 1,
  },
});
