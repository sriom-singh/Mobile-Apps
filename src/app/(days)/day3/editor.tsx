import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Markdown from "react-native-markdown-display";
import { Stack } from "expo-router";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Editor = () => {
  const [input, setInput] = useState(``);
  const [preview, setpreview] = useState(``);
  const [isEditing, setIsEditing] = useState(true);
  function handleInputChange(text: string) {
    setInput(text);
  }

  function showPreview() {
    input !== ``
      ? setpreview(input)
      : setpreview("It seems you have not written anything.");
    setIsEditing(false);
  }
  function hidePreview() {
    setpreview("Nothing Available");
    setIsEditing(true);
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Markdown Editor" }} />

      <View
        style={{
          flexDirection: "row",
          gap: 10,
          height: 60,
          backgroundColor: "#fff",
          padding: 10,
        }}
      >
        <Pressable
          onPress={hidePreview}
          style={[
            styles.button,
            { backgroundColor: isEditing ? "lightcyan" : "white" },
          ]}
        >
          <Text style={styles.text}>Edit</Text>
        </Pressable>
        <Pressable
          onPress={showPreview}
          style={[
            styles.button,
            { backgroundColor: !isEditing ? "lightcyan" : "white" },
          ]}
        >
          <Text style={styles.text}>Preview</Text>
        </Pressable>
      </View>
      <ScrollView
        style={styles.page}
        contentInsetAdjustmentBehavior="automatic"
      >
        {isEditing ? (
          <TextInput
            numberOfLines={40}
            multiline={true}
            style={{
              marginBottom: 10,
              textAlignVertical: "top",
              fontSize: 16,
            }}
            placeholder="Type Code here..."
            onChangeText={handleInputChange}
            value={input}
          />
        ) : (
          <Markdown>{preview}</Markdown>
        )}
      </ScrollView>
    </View>
  );
};

export default Editor;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  page: {
    backgroundColor: "#fff",
    padding: 10,
    paddingTop: 20,
  },
  button: {
    flex: 1,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontWeight: "500",
    fontSize: 16,
  },
});
