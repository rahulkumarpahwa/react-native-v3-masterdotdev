import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Shopping List", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="counter"
        options={{ title: "Counter", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="idea"
        options={{ title: "Idea", headerTitleAlign: "center" }}
      />
    </Stack>
  );
}
