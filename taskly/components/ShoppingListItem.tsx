import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../themes/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { List } from "../utils/types";
import { Dispatch, SetStateAction } from "react";

type Props = {
  id: number;
  name?: string;
  isCompleted?: boolean;
  deleteTask: (id: number, list: List[]) => List[];
  list: List[];
  changeList: Dispatch<SetStateAction<List[]>>;
  changeStatus: (id: number, list: List[]) => List[];
};

export function ShoppingListItem({
  id,
  name,
  isCompleted,
  deleteTask,
  list,
  changeList,
  changeStatus,
}: Props) {
  const handleDelete = (): void => {
    Alert.alert(
      `Are you sure you want to delete ${name ? name : "this"}?`,
      "Deletion will be Permanent.",
      [
        {
          text: "Yes",
          onPress: () => {
            const newList = deleteTask(id, list);
            changeList(newList);
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
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}>
        <Pressable
          onPress={() => {
            const newList = changeStatus(id, list);
            changeList(newList);
          }}
        >
          <Text>
            <Entypo
              name={isCompleted ? "check" : "circle"}
              size={24}
              color={theme.colorGrey}
            />
          </Text>
        </Pressable>

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
    paddingVertical: 4,
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
