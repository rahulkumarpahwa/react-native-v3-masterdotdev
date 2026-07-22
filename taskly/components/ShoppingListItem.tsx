import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../theme";

type Props = {
  name?: string;
};

export function ShoppingListItem({ name }: Props) {
  const handleDelete = (): void => {
    Alert.alert(
      `Are you sure you want to delete ${name ? name : "this"}?`,
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
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{name}</Text>
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
  );
}

const styles = StyleSheet.create({
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
