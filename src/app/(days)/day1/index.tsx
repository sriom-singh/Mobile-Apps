import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function index() {
  return (
    <View>
      <Stack.Screen
        options={{ title: "Day 1", animation: "fade_from_bottom" }}
      />
      <Text style={{fontFamily:'AmaticBold',fontSize:50}}>Day 1 Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
