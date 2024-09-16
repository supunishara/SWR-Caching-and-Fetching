import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const HomePage = () => {
  return (
    <View>
      <Text>index</Text>
      <Link href="/users/1">Go To User one</Link>
      <Pressable onPress={() => router.push("/users/2")}>
        <Text>Go To uSer 2</Text>
      </Pressable>

      <Pressable
        onPress={() =>
          router.push({
            pathname: "/users/[id]",
            params: { id: "3" },
          })
        }
      >
        <Text>Go To uSer 2</Text>
      </Pressable>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
