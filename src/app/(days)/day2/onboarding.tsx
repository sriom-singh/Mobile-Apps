import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Stack, Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import {
  SlideInRight,
  SlideOutLeft,
  FadeIn,
  FadeOut,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";
const onboardingSteps = [
  {
    title: "Order in the mobile app",
    description: "Choose clothes online from and place an order.Get bonuses!",
    image: require("../../../../assets/undraw_online_groceries_a02y.png"),
  },
  {
    title: "Try on clothes in the store",
    description: "If the outfit does not suit you, we will refund the money.",
    image: require("../../../../assets/step2.png"),
  },
  {
    title: "Wear clothes with pleasure!",
    description: "We have clothes for every season and every taste.",
    image: require("../../../../assets/step3.png"),
  },
];

export default function Onboarding() {
  const swipeForward = Gesture.Fling();
  // .onEnd((event) => {
  //   console.log(event);
  // });

  const [screenIndex, setScreenIndex] = useState(0);
  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    if (screenIndex === onboardingSteps.length - 1) {
      endOnboarding();
    }
    setScreenIndex(screenIndex + 1);
  };
  const onBack = () => {
    if (screenIndex === 0) {
      endOnboarding();
    }
    setScreenIndex(screenIndex - 1);
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );

  const endOnboarding = () => {
    router.back();
    setScreenIndex(0);
  };

  return (
    <SafeAreaView
      style={{ width: "100%", paddingTop: 20, backgroundColor: "white" }}
    >
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
        <View style={styles.indiacatorContainer}>
          {onboardingSteps.map((steps, i) => (
            <View
              key={i}
              style={[
                styles.indiacator,
                { backgroundColor: i === screenIndex ? "blue" : "#E9EAEC" },
              ]}
            ></View>
          ))}
        </View>
        <GestureDetector gesture={swipes}>
          <Animated.View
            entering={SlideInRight}
            exiting={SlideOutLeft}
            style={{
              width: "100%",
              height: "89%",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={screenIndex}
          >
            <Animated.Image
              entering={FadeIn.delay(150)}
              exiting={FadeOut}
              style={styles.image}
              source={data.image}
            />
            <Text style={styles.headingText}>{data.title}</Text>
            <Animated.Text entering={SlideInRight.delay(150)} style={styles.text}>{data.description}</Animated.Text>
          </Animated.View>
        </GestureDetector>
        <View style={styles.buttonContainer}>
          <Text
            onPress={endOnboarding}
            style={{ textAlign: "center", padding: 10 }}
          >
            Skip
          </Text>

          <Pressable
            onPress={onContinue}
            style={styles.button}
            android_disableSound={true}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    padding: 10,
    gap: 4,
  },
  indiacatorContainer: { flexDirection: "row", gap: 4 },
  indiacator: {
    flex: 1,
    height: 3,
    backgroundColor: "black",
    borderRadius: 50,
  },
  image: {
    width: "100%",
    height: "62%",
    aspectRatio: 1,
  },
  headingText: {
    fontSize: 38,
    width: "100%",
    color: "black",
    fontFamily: "Poppins",
    fontWeight: "100",
    textAlign: "left",
  },

  text: {
    textAlign: "left",
    fontFamily: "Poppins",
    fontSize: 16,
    width: "100%",
    paddingHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    height: "12%",
    gap: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "black",
    borderRadius: 50,
    paddingHorizontal: 50,
    paddingVertical: 15,
    width: "70%",
  },
  buttonText: { color: "white", fontFamily: "Poppins", textAlign: "center" },
});
