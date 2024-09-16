import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home page",
        }}
      />
      <Stack.Screen
        name="users/[id]"
        options={{
          headerTitle: "User page",
        }}
      />
    </Stack>
  );
};

export default RootLayout;
