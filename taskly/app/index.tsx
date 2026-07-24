import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  Pressable,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { Link } from "expo-router";
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

  let isFocus: boolean = false;
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
    <FlatList
      data={list}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
      ListEmptyComponent={
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 6,
            margin: 4,
          }}
        >
          <Text>Your Shopping List is Empty!</Text>
        </View>
      }
      renderItem={({ item }) => {
        return (
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
        );
      }}

      ListHeaderComponent={
        <View>
          <TextInput
            style={[
              styles.textInput,
              isFocus ? { borderColor: theme.colorGrey } : undefined,
            ]}
            placeholder="E.g. Coffee"
            onChangeText={changeInput}
            keyboardType="default"
            maxLength={30}
            autoFocus
            onFocus={() => {
              isFocus = true;
            }}
            onSubmitEditing={handleSubmit}
            returnKeyType="done"
          >
            {input}
          </TextInput>
        </View>
      }
    ></FlatList>
    // <ScrollView
    //   style={styles.container}
    //   contentContainerStyle={styles.contentContainer}
    //   stickyHeaderIndices={[0]} // make the View inside the scroll view sticky and index start from the first view with 0
    // >
    //   {/* <View style={styles.itemContainer}>
    //     <Text style={styles.itemText}>Coffee</Text>
    //     <Pressable onPress={handleDelete} style={styles.itemButton}>
    //       <Text style={styles.itemButtonText}>Delete</Text>
    //     </Pressable>
    //   </View> */}

    //   <View>
    //     <TextInput
    //       style={styles.textInput}
    //       placeholder="E.g. Coffee"
    //       onChangeText={(input) => changeInput(input)}
    //       keyboardType="default"
    //       autoFocus
    //       maxLength={30}
    //       onSubmitEditing={handleSubmit}
    //       returnKeyType="done"
    //     >
    //       {input}
    //     </TextInput>
    //   </View>
    //   <View>
    //     {list.length > 0 &&
    //       list.map((item) => (
    //         <ShoppingListItem
    //           key={item.id}
    //           id={item.id}
    //           name={item.name}
    //           isCompleted={item.status}
    //           deleteTask={deleteTask}
    //           list={list}
    //           changeList={changeList}
    //           changeStatus={toggleTask}
    //         ></ShoppingListItem>
    //       ))}{" "}
    //   </View>

    //   {/* <View style={[StyleSheet.absoluteFill, {backgroundColor : "red"}]} /> */}
    //   {/* <View style={{...StyleSheet.absoluteFill, backgroundColor : "red" }} /> */}

    //   {/* <View>
    //     <Text>Pixel Ratio : {PixelRatio.get()}</Text>
    //   </View> */}

    //   {/* <StatusBar style="auto" />  */}
    //   {/* it will add the extra header space over the app. */}
    //   {/* <Link href="/counter" style={{textAlign : "center", padding : 12, margin: 18, fontSize : 18, borderWidth : 1, borderRadius : 6}}>Go To Counter</Link> */}
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    paddingVertical: 12,
    marginHorizontal: 4,
  },
  textInput: {
    borderWidth: 2,
    padding: 14,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: theme.colorLightGrey,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: theme.colorWhite,
  },
});
