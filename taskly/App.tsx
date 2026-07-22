import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, PixelRatio } from "react-native";
import { theme } from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "400" }}>Shopping List</Text>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee </Text>
      </View>
      {/* <View>
        <Text>Pixel Ratio : {PixelRatio.get()}</Text>
      </View> */}
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#1a759f",
    paddingHorizontal: 8,
    paddingVertical: 16,
    alignItems: "center",
  },
  itemText: { fontSize: 18, fontWeight: "200" },
});
