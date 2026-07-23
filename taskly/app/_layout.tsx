import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Shopping List" , headerTitleAlign : "center"}} />
    </Stack>
  );
}