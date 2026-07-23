import { Stack, Tabs } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { theme } from "../themes/theme";

export default function Layout() {
  return (
    // <Stack>
    //   <Stack.Screen
    //     name="index"
    //     options={{ title: "Shopping List", headerTitleAlign: "center" }}
    //   />
    //   {/* without defining the Stack.Screen we acn still make the link from one screen to another using the link or router. these are just for the additional options and updates. */}
    //   <Stack.Screen
    //     name="counter"
    //     options={{
    //       title: "Counter",
    //       headerTitleAlign: "center",
    //       presentation: "modal",
    //       animation: "slide_from_bottom",
    //     }}
    //   />
    //   <Stack.Screen
    //     name="idea"
    //     options={{ title: "Idea", headerTitleAlign: "center" }}
    //   />
    // </Stack>

    // to Tabs
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colorCerulean,
        headerTitleStyle: { color: theme.colorCerulean },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Shopping List",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome6 name="list-check" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          headerShown: false, // we will remove the header of the outer screen in case of two headers
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="counter"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "Idea",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="lightbulb-on-10"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
