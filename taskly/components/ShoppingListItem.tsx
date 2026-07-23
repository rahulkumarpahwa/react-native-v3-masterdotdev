import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../themes/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";

type Props = {
  name?: string;
  isCompleted?: boolean;
};

export function ShoppingListItem({ name, isCompleted }: Props) {
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
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.itemCompleted : undefined,
      ]}
    >
      <View style={{flexDirection : "row", justifyContent: "center",  gap : 10}}>
        {" "}
        <Text><Entypo name={isCompleted ? 'check' : 'circle' } size={24} color={theme.colorGrey} /></Text>
        <Text
          style={[
            styles.itemText,
            isCompleted ? styles.itemTextCompleted : undefined,
          ]}
        >
          {name}
        </Text>
      </View>
      <TouchableOpacity // adds opacity than pressable
        style={[
          styles.itemButton,
          isCompleted ? styles.itemButtonCompleted : undefined,
        ]}
        onPress={() => {
          console.log("Deleted");
          handleDelete();
        }}
        activeOpacity={0.6}
      >
        {/* <Text style={styles.itemButtonText}>Delete</Text> */}
        <Text>
          <Ionicons
            name="close-circle"
            size={28}
            color={isCompleted ? theme.colorGrey : theme.colorRed}
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 18,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "300",
  },
  itemButton: {
    // borderWidth: 1,
    padding: 8,
    // borderRadius: 6,
    // backgroundColor: theme.colorBlack,
    // borderColor: theme.colorBlack,
  },
  itemButtonText: {
    color: theme.colorWhite,
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: "700",
  },
  itemCompleted: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorGrey,
  },
  itemTextCompleted: {
    textDecorationLine: "line-through",
    color: theme.colorGrey,
  },
  itemButtonCompleted: {
    // backgroundColor: theme.colorGrey,
    // borderColor: theme.colorLightGrey,
  },
});
