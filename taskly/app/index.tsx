import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, PixelRatio, Pressable } from "react-native";
import { ShoppingListItem } from "../components/ShoppingListItem";

export default function App() {
  return (
    <View style={styles.container}>
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

      {/* <StatusBar style="auto" />  */}
      {/* it will add the extra header space over the app. */}
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
