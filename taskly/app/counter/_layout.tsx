import { Link, router, Stack } from "expo-router";
import { theme } from "../../themes/theme";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: { color: theme.colorCerulean },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Counter",
          headerTitleAlign: "center",
          presentation : "modal",
          animation :"slide_from_bottom",
          headerRight: () => {
            return (
              <View
                style={{
                  flexDirection: "row-reverse",
                  gap: 16,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity hitSlop={20}
                  onPress={() => router.navigate("/counter/settings")}
                >
                  <MaterialIcons name="settings" size={24} color="black" />
                </TouchableOpacity>

                <Link href="/counter/history" asChild>
                  <Pressable hitSlop={20}>
                    <MaterialIcons name="history" size={24} color="black" />
                  </Pressable>
                </Link>
              </View>
            );
          },
        }}
      ></Stack.Screen>
    </Stack>
  );
}
