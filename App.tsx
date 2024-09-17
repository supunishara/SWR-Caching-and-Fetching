import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import PostListItem from "./src/components/PostListItem";
import { usePosts } from "./src/hooks/posts";

export default function App() {

  const { posts, isLoading, error } = usePosts();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Failed to load data: {error.message}</Text>
      </SafeAreaView>
    );
  }


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <PostListItem
            post={item}
            contentContainerStyle={{ gap: 10, padding: 10 }}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
    alignItems: "center",
    justifyContent: "center",
  },
});
