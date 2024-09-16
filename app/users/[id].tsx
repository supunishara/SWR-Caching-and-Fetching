import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const UserPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>User Page {id}</Text>
    </View>
  );
};

export default UserPage;

const styles = StyleSheet.create({});
