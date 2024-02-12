import { View, Text, Pressable, StyleSheet } from "react-native";
import { Stack, Link } from "expo-router";
import Markdown from "react-native-markdown-display";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const content = `# Learning Markdown

Welcome to our Markdown tutorial! In this post, we'll cover the basics of Markdown, a lightweight markup language that allows you to write formatted text using a simple and readable syntax.

## What is Markdown?

Markdown is a text-to-HTML conversion tool that simplifies the process of writing content for the web. It was created by John Gruber and Aaron Swartz to be easy to read and write, while also being readable as plain text.


`;
const copy = `
# Getting Started

## Headers
\`\`\`
#H1, #H2, #H3, #H4, #H5, #H6
\`\`\`
# H1
## H2
### H3
#### H4
##### H5
###### H6

## Emphasis
\`\`\`
#*italic* or _italic_
\`\`\`
*italic* or _italic_
\`\`\`
**bold** or __bold__
\`\`\`
**bold** or __bold__
\`\`\`
**_combined_**
\`\`\`
**_combined_**

## Lists

### Unordered List
\`\`\`
- Item 1
- Item 2
  - Subitem A
  - Subitem B
  \`\`\`
- Item 1
- Item 2
  - Subitem A
  - Subitem B

### Ordered List
\`\`\`
1. First item
2. Second item
   1. Subitem I
   2. Subitem II
\`\`\`
1. First item
2. Second item
   1. Subitem I
   2. Subitem II

## Links
\`\`\`
[Visit OpenAI](https://www.openai.com)
[Visit Google](https://www.google.com "Google Homepage")
\`\`\`
[Visit OpenAI](https://www.openai.com)
[Visit Google](https://www.google.com "Google Homepage")

## Images
\`\`\`
![Alt text](https://placekitten.com/200/300 "A cute kitten")
\`\`\`
![Alt text](https://placekitten.com/200/300 "A cute kitten")

## Blockquotes

\`\`\`
> This is a blockquote.
> It can span multiple lines.
\`\`\`
> This is a blockquote.
> It can span multiple lines.
## Horizontal Line
\`\`\`
---
\`\`\`
-
---
--
`;
const index = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Day 3: Markdown" }} />
      <ScrollView>
      <Markdown>{content}</Markdown>
      <Markdown>{copy}</Markdown>
      </ScrollView>

      <Link href={"day3/editor"} asChild>
        <Pressable style={styles.button} android_disableSound={true}>
          <Text style={styles.text}>Go to Editor -⩥</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default index;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 20,
    justifyContent:'space-between'
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "green",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
