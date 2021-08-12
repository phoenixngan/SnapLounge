import React, { useState, useCallback, useEffect } from "react";
import { Image, Platform, View, Button, StatusBar, StyleSheet, Text, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GiftedChat, Actions } from "react-native-gifted-chat";
import db from "../firebase";
import firebase from "@firebase/app";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import QuestionTwo from "../screens/QuestionTwo";

const orangeEllipse = require("../assets/orangeEllipse.png");
const sad = require("../assets/Sad.png");
const overwhelmed = require("../assets/Overwhelmed.png");
const bored = require("../assets/Bored.png");
const delighted = require("../assets/Delighted.png");
const card = require("../assets/card.png");
const nextCard = require("../assets/nextCard.png");
const previousCard = require("../assets/previousCard.png");
const cardHeader = require("../assets/cardHeader.png");
const backButton = require("../assets/back.png");
const circles = require("../assets/Circles1.png");

export default function QuestionOne({navigation, route, QuestionTwo: QuestionTwo}){
  return(

    <View style={styles.container}>
      <Image source={card} style={styles.card}></Image>
      <Image source={nextCard} style={styles.nextCard}></Image>
      <Image source={previousCard} style={styles.previousCard}></Image>
      <Image source={cardHeader} style={styles.cardHeader}></Image>

      <Image source={bored} style={styles.Bored}></Image>
      <Image source={delighted} style={styles.Delighted}></Image>
      <Image source={sad} style={styles.Sad}></Image>
      <Image source={overwhelmed} style={styles.Overwhelmed}></Image>

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
          navigation.navigate("QuestionTwo");
        }}
      >
        <ImageBackground source={orangeEllipse} style={styles.orangeEllipse}>
        <Text style={styles.continue}>
          Continue
        </Text>
        </ImageBackground>
      </TouchableOpacity>

      <Text style={styles.Which}>
        Which Meme best represents your mood?
      </Text>

      <Text style={styles.bored}>
        Bored
      </Text>
      <Text style={styles.sad}>
        Sad
      </Text>
      <Text style={styles.delighted}>
        Delighted
      </Text>
      <Text style={styles.overwhelmed}>
        Overwhelmed
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
  bored: {
    position: "absolute",
    width: 132,
    height: 23,
    left: 115,
    top: 459,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 18,
    color: "white",
  },
  sad: {
    position: "absolute",
    width: 133,
    height: 23,
    left: 275,
    top: 459,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 18,
    color: "white",
  },
  delighted: {
    position: "absolute",
    width: 132,
    height: 23,
    left: 105,
    top: 664,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 18,
    color: "white",
  },
  overwhelmed: {
    position: "absolute",
    width: 133,
    height: 23,
    left: 236,
    top: 663,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 18,
    color: "#FFFFFF",
  },
  Which: {
    position: "absolute",
    width: 257,
    height: 137,
    left: 90,
    top: 165,
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
  Bored:{
    position: "absolute",
    width: 133,
    height: 149,
    left: 66,
    top: 302,
  },
  Delighted:{
    position: "absolute",
    width: 133,
    height: 149,
    left: 66,
    top: 507,
  },
  Sad:{
    position: "absolute",
    width: 133,
    height: 149,
    left: 217,
    top: 302,
  },
  Overwhelmed:{
    position: "absolute",
    width: 133,
    height: 149,
    left: 217,
    top: 507,
  },
});
