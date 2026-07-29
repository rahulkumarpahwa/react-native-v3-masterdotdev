import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { theme } from "../themes/theme";
// import { registerForPushNotificationsAsync } from "../utils/registerForPushNotificationsAsync";
import * as Haptics from "expo-haptics";
import ConfettiCannon from "react-native-confetti-cannon";
import { useRef } from "react";

export default function IdeaScreen() {
  // const handleRequestPermission = async ()=>{
  //   const result = await registerForPushNotificationsAsync();
  //   console.log(result)
  // }

  const {width} = useWindowDimensions(); // this one is responsive and when we change the screen orientation then it will change as compared to dimension.
  const confettiRef = useRef<any>(null);

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
          margin: 12,
        }}
        onPress={() => {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          confettiRef?.current?.start();
        }}
      >
        <Text
          style={[
            styles.text,
            {
              color: theme.colorWhite,
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: 18,
            },
          ]}
        >
          Request Permission
        </Text>
      </TouchableOpacity>
      <ConfettiCannon
        count={50}
        ref={confettiRef}
        origin={{ x: width / 2, y: -30 }}
        autoStart={false}
        fadeOut={true}
      />
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
