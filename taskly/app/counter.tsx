import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../themes/theme";
import { useRouter } from "expo-router";

export default function CounterScreen() {
  const [counter, changeCounter] = useState(0);
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter</Text>
      <Text style={styles.counter}>{counter}</Text>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 20,
        }}
      >
        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => {
            changeCounter((counter) => ++counter);
          }}
          activeOpacity={0.6}
        >
          <Text style={{ color: theme.colorWhite, fontSize: 20 }}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => {
            changeCounter((counter) => --counter);
          }}
          activeOpacity={0.6}
        >
          <Text style={{ color: theme.colorWhite, fontSize: 20 }}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => {
            changeCounter(0);
          }}
          activeOpacity={0.6}
        >
          <Text style={{ color: theme.colorWhite, fontSize: 20 }}>Reset</Text>
        </TouchableOpacity>
      </View>

      {/* <TouchableOpacity onPress={() => router.navigate("/idea")}>
        <Text
          style={{
            textAlign: "center",
            padding: 12,
            margin: 18,
            fontSize: 18,
            borderWidth: 1,
            borderRadius: 6,
          }}
        >
          Go To /idea
        </Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 12,
  },
  text: {
    fontSize: 24,
  },
  counter: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: theme.colorBlack,
    padding: 20,
    borderRadius: 6,
    margin: 10,
  },
  itemButton: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: theme.colorBlack,
    color: theme.colorWhite,
  },
});
