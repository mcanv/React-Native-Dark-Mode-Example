import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View, useColorScheme } from "react-native";
import AppStyle from "./App.styles";
import { AppContext, useContext } from "./AppContext";
import { useEffect } from "react";

export default function App() {
  const styles = AppStyle();
  const { setDarkMode, darkMode } = useContext(AppContext);
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (colorScheme == "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [colorScheme]);

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>
        Welcome to React Native Dark Mode App!
      </Text>
      <TouchableOpacity
        onPress={() => {
          setDarkMode(!darkMode);
        }}
        style={styles.toggleBtn}
      >
        <Text style={styles.toggleBtnText}>Toggle Theme</Text>
      </TouchableOpacity>
      <StatusBar
        translucent
        animated
        style={darkMode ? "light" : "dark"}
        backgroundColor="transparent"
      />
    </View>
  );
}
