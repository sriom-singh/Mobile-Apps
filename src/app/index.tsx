import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import DayListItem from "../components/DayListItem";

const days = [...Array(24)].map((val, index) => index + 1);

export default function App() {
  return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.content}
          numColumns={2}
          columnWrapperStyle={styles.column}
          data={days}
          renderItem={({ item }) => <DayListItem data={item} />}
          // horizontal
        />

        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
});
