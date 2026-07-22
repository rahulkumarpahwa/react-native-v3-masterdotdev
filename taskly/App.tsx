import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  Button,
  Alert,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { theme } from "./theme";

export default function App() {
  const handleDelete = (): void => {
    Alert.alert(
      "Are you sure you want to delete?",
      "Deletion will be Permanent.",
      [
        {
          text: "Yes",
          onPress: () => {
            console.log("SELECTED YES");
          },
          style: "destructive",
        },
        {
          text: "cancel",
          onPress: () => {
            console.log("SELECTED NO");
          },
          style: "cancel",
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "400" }}>Shopping List</Text>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <Pressable onPress={handleDelete} style={styles.itemButton}>
          <Text style={styles.itemButtonText}>Delete</Text>
        </Pressable>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Tea</Text>
        <TouchableOpacity // adds opacity than pressable
          style={styles.itemButton}
          onPress={() => {
            console.log("Deleted");
            handleDelete();
          }}
          activeOpacity={0.6}
        >
          <Text style={styles.itemButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
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
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 8,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "300",
  },
  itemButton: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 6,
    backgroundColor: theme.colorBlack,
    borderColor: theme.colorBlack,
  },
  itemButtonText: {
    color: theme.colorWhite,
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: "700",
  },
});
