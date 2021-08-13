import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, LogBox} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "./screens/ChatScreen";
import FriendsScreen from "./screens/FriendsScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import ProfileScreen from "./screens/ProfileScreen";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import Lounge from "./screens/Lounge";
import Settings from "./screens/Settings";
import Affirmations from "./screens/Affirmations";
import FriendsLounge from "./screens/FriendsLounge";
import Bestie from "./screens/Bestie";
import LoungeIntro from "./screens/LoungeIntro";
import QuestionOne from "./screens/QuestionOne";
import QuestionTwo from "./screens/QuestionTwo";
import QuestionThree from "./screens/QuestionThree";
import QuestionFour from "./screens/QuestionFour";
import QuestionFive from "./screens/QuestionFive";
import CallToAction from "./screens/CallToAction";
import Push from "./screens/Push";
import Manage from "./screens/Manage";
import Resources from "./screens/Resources";
import Mood from "./screens/Mood";
import firebase from "@firebase/app";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

const Stack = createStackNavigator();

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


function App() {
  const [isSignedIn, setIsSignedIn] = useState(
    firebase.auth().currentUser ? true : false
  );

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(user ? true : false);
    });
  }, []);

  return (
    <ActionSheetProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Tabs" mode="card">
            {isSignedIn ? (
              <>
                <Stack.Screen name="Tabs" component={BottomTabNavigator} />
                <Stack.Screen name="Chat" component={ChatScreen} />
                <Stack.Screen name="Friends" component={FriendsScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Lounge" component={Lounge} options={{headerShown: false}}/>
                <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}}/>
                <Stack.Screen name="Push" component={Push} options={{headerShown: false}}/>
                <Stack.Screen name="Manage" component={Manage} options={{headerShown: false}}/>
                <Stack.Screen name="Affirmations" component={Affirmations} options={{headerShown: false}}/>
                <Stack.Screen name="FriendsLounge" component={FriendsLounge} options={{headerShown: false}}/>
                <Stack.Screen name="Bestie" component={Bestie} options={{headerShown: false}}/>
                <Stack.Screen name="LoungeIntro" component={LoungeIntro} options={{headerShown: false}}/>
                <Stack.Screen name="QuestionOne" component={QuestionOne} options={{headerShown: false}}/>
                <Stack.Screen name="QuestionTwo" component={QuestionTwo} options={{headerShown: false}}/>
                <Stack.Screen name="QuestionThree" component={QuestionThree} options={{headerShown: false}}/>
                <Stack.Screen name="QuestionFour" component={QuestionFour} options={{headerShown: false}}/>
                <Stack.Screen name="QuestionFive" component={QuestionFive} options={{headerShown: false}}/>
                <Stack.Screen name="CallToAction" component={CallToAction} options={{headerShown: false}}/>
                <Stack.Screen name="Resources" component={Resources} options={{headerShown: false}}/>
                <Stack.Screen name="Mood" component={Mood} options={{headerShown: false}} />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="Signup" component={SignupScreen} />
              </>
            )}
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </View>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;
