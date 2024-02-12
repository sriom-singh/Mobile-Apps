import { Inter_900Black } from "@expo-google-fonts/inter";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

type DayListItem = {
  data: number;
};
const titles = [
  "Setting up Project",
  "Onboarding Screen",
  "Markdown Editor",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
  "Title ",
];
function DayListItem({ data }: DayListItem) {
  return (
    <Link href={`/day${data}`} asChild>
      <Pressable style={styles.box} android_disableSound={true}>
        <Text style={styles.text}>Day -{data}</Text>
        <Text style={styles.title}>{titles[data - 1]}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#f9ede3",
    flex: 1,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
  },
  text: {
    fontFamily: "AmaticBold",
    color: "#9b4521",
    fontSize: 50,
  },
  title: {
    fontSize: 16,
  },
});

export default DayListItem;
