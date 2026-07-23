import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, PixelRatio, Pressable } from "react-native";
import { theme } from "./themes/theme";
import { ShoppingListItem } from "./components/ShoppingListItem";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";


export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          marginBottom: 10,
        }}
      >
        <Text>
          <FontAwesome6 name="list-check" size={24} color="black" />{" "}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "400" }}> Shopping List</Text>
      </View>

      {/* <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <Pressable onPress={handleDelete} style={styles.itemButton}>
          <Text style={styles.itemButtonText}>Delete</Text>
        </Pressable>
      </View> */}

      <ShoppingListItem name="Coffee" isCompleted={false} />
      <ShoppingListItem name="Tea" isCompleted={true} />
      <ShoppingListItem name="Sugar" isCompleted />
      <ShoppingListItem name="boligarfo" isCompleted={true} />
      {/* <View style={[StyleSheet.absoluteFill, {backgroundColor : "red"}]} /> */}
      {/* <View style={{...StyleSheet.absoluteFill, backgroundColor : "red" }} /> */}

      {/* <View>
        <Text>Pixel Ratio : {PixelRatio.get()}</Text>
      </View> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
