import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../themes/theme";
// import { registerForPushNotificationsAsync } from "../utils/registerForPushNotificationsAsync";

export default function IdeaScreen() {
  // const handleRequestPermission = async ()=>{
  //   const result = await registerForPushNotificationsAsync();
  //   console.log(result)
  // }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Idea</Text>
      <Text style={styles.content}>
        Here is my idea to build the App which will generate the Habits of the
        Users
      </Text>
      <TouchableOpacity
      activeOpacity={0.8}
        style={{
          backgroundColor: theme.colorBlack,
          padding: 12,
          borderRadius: 6,
          margin : 12
        }}
      >
        <Text
          style={[
            styles.text,
            {
              color: theme.colorWhite,
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize : 18
            },
          ]}
        >
          Request Permission
        </Text>
      </TouchableOpacity>
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
