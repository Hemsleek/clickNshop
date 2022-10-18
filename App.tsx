import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import AppNavigations from "./src/AppNavigations";
import ThemeManager from "./src/components/organisms/ThemeManager";

export default function App() {
  return (
    <ThemeManager>
      <AppNavigations />
    </ThemeManager>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
