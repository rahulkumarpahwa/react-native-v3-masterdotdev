import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, PixelRatio, Pressable } from "react-native";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { Link } from "expo-router";
import { TextInput } from "react-native";
import { theme } from "../themes/theme";
import { useState } from "react";
import { List } from "../utils/types";
import { generateNewId } from "../utils/generateId";
import { deleteTask } from "../utils/tasks/deleteTask";
import { toggleTask } from "../utils/tasks/toggleTask";

export default function App() {
  const newList: List[] = [
    {
      name: "Coffee",
      id: 0,
      status: false,
    },
    {
      id: 1,
      name: "Azucar",
      status: true,
    },
  ];

  const [list, changeList] = useState<List[]>(newList);
  const [input, changeInput] = useState<string>("");
  const handleSubmit = () => {
    const newItem = {
      id: generateNewId(list),
      name: input,
      status: false,
    };
    if (newItem.name !== "") {
      changeList([...list, newItem]);
      changeInput("");
    }
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <Pressable onPress={handleDelete} style={styles.itemButton}>
          <Text style={styles.itemButtonText}>Delete</Text>
        </Pressable>
      </View> */}

      <TextInput
        style={styles.textInput}
        placeholder="E.g. Coffee"
        onChangeText={(input) => changeInput(input)}
        keyboardType="default"
        autoFocus
        maxLength={30}
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
      >
        {input}
      </TextInput>
      {list.length > 0 &&
        list.map((item) => (
          <ShoppingListItem
            key={item.id}
            id={item.id}
            name={item.name}
            isCompleted={item.status}
            deleteTask={deleteTask}
            list={list}
            changeList={changeList}
            changeStatus={toggleTask}
          ></ShoppingListItem>
        ))}

      {/* <View style={[StyleSheet.absoluteFill, {backgroundColor : "red"}]} /> */}
      {/* <View style={{...StyleSheet.absoluteFill, backgroundColor : "red" }} /> */}

      {/* <View>
        <Text>Pixel Ratio : {PixelRatio.get()}</Text>
      </View> */}

      {/* <StatusBar style="auto" />  */}
      {/* it will add the extra header space over the app. */}
      {/* <Link href="/counter" style={{textAlign : "center", padding : 12, margin: 18, fontSize : 18, borderWidth : 1, borderRadius : 6}}>Go To Counter</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 4,
  },
  textInput: {
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 10,
    marginVertical: 8,
    borderColor: theme.colorLightGrey,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    fontSize: 18,
    borderRadius: 10,
  },
});
