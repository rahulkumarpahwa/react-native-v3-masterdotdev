import { Text, View, StyleSheet } from "react-native";

export default function IdeaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Idea</Text>
      <Text style={styles.content}>
        Here is my idea to build the App which will generate the Habits of the
        Users
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
  content: {
    fontSize: 18,
    textAlign: "center",
  },
});
