import React, { useState, useCallback, useEffect } from "react";
import { Image, Platform, View, Button, StatusBar, StyleSheet, Text, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GiftedChat, Actions } from "react-native-gifted-chat";
import db from "../firebase";
import firebase from "@firebase/app";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import QuestionFive from "../screens/QuestionFive";

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
const backButton = require("../assets/back.png");
const circles = require("../assets/Circles5.png");

export default function QuestionFour({navigation, route, QuestionFive: QuestionFive}){
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  const [pressed3, setPressed3] = useState(false);
  const [pressed4, setPressed4] = useState(false);

  return(
    <View style={styles.container}>
      <Image source={card} style={styles.card}></Image>
      <Image source={nextCard} style={styles.nextCard}></Image>
      <Image source={previousCard} style={styles.previousCard}></Image>
      <Image source={cardHeader} style={styles.cardHeader}></Image>

      <TouchableOpacity
        onPress={() => {
          setPressed1(!pressed1);
        }}>
        <Image source={greyBox} style={pressed1 ? styles.greyBox1Pressed : styles.greyBox1}></Image>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setPressed2(!pressed2);
        }}>
        <Image source={greyBox} style={pressed2 ? styles.greyBox2Pressed : styles.greyBox2}></Image>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setPressed3(!pressed3);
        }}>
        <Image source={greyBox} style={pressed3 ? styles.greyBox3Pressed : styles.greyBox3}></Image>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setPressed4(!pressed4);
        }}>
        <Image source={greyBox} style={pressed4 ? styles.greyBox4Pressed : styles.greyBox4}></Image>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setPressed1(!pressed1);
        }}>
        <Image source={celebration} style={styles.celebration}></Image>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setPressed2(!pressed2);
        }}>
        <Image source={anxious} style={styles.anxious}></Image>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setPressed3(!pressed3);
        }}>
        <Image source={potato} style={styles.potato}></Image>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setPressed4(!pressed4);
        }}>
        <Image source={chill} style={styles.chill}></Image>
      </TouchableOpacity>
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
          navigation.navigate("QuestionFive");
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
    top: 459,
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
    top: 459,
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
    left: 100,
    top: 664,
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
    top: 663,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 18,
    color: "#FFFFFF",
  },
  Pick: {
    position: "absolute",
    width: 250,
    height: 99,
    left: 95,
    top: 164,
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
    left: 402,
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
  greyBox1: {
    position: "absolute",
    width: 133,
    height: 149,
    left: 66,
    top: 302,
    opacity: .5,
  },
  greyBox1Pressed: {
    position: "absolute",
    width: 133,
    height: 149,
    left: 66,
    top: 302,
    opacity: 1,
  },
  greyBox2: {
    position: "absolute",
    width: 133,
    height: 149,
    left: 217,
    top: 302,
    opacity: .5,
  },
  greyBox2Pressed: {
    position: "absolute",
    width: 133,
    height: 149,
    left: 217,
    top: 302,
    opacity: 1,
  },
  greyBox3: {
    position: "absolute",
    width: 133,
    height: 149,
    left: 66,
    top: 507,
    opacity: .5,
  },
  greyBox3Pressed: {
    position: "absolute",
    width: 133,
    height: 149,
    left: 66,
    top: 507,
    opacity: 1,
  },
  greyBox4: {
    position: "absolute",
    width: 133,
    height: 149,
    left: 217,
    top: 507,
    opacity: .5,
  },
  greyBox4Pressed: {
    position: "absolute",
    width: 133,
    height: 149,
    left: 217,
    top: 507,
    opacity: 1,
  },
  celebration: {
    position: "absolute",
    width: 132,
    height: 132,
    left: 66,
    top: 319,
  },
  anxious: {
    position: "absolute",
    width: 133,
    height: 149,
    left: 210,
    top: 291,
  },
  potato: {
    position: "absolute",
    width: 122,
    height: 123,
    left: 72,
    top: 528,
  },
  chill: {
    position: "absolute",
    width: 144,
    height: 144,
    left: 213,
    top: 511,
  },
  blackRect: {
    position: "absolute",
    width: 500,
    height: 40,
    left: 0,
    top: 0,
    backgroundColor: "black",
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
});
