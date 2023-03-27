import { StyleSheet } from "react-native";
import { AppContext, useContext } from "./AppContext";

const AppStyle = () => {
  const { darkMode } = useContext(AppContext);

  const styles = StyleSheet.create({
    // Styling
    container: {
      flex: 1,
      backgroundColor: darkMode ? "#000" : "#fff", // darkMode true ise siyah, false ise beyaz arkaplan rengi
      alignItems: "center",
      justifyContent: "center",
    },
    headingText: {
      fontWeight: "bold",
      color: darkMode ? "#fff" : "#000",
    },
    toggleBtn: {
      backgroundColor: darkMode ? "#fff" : "#000",
      height: 39,
      paddingHorizontal: 15,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      borderRadius: 5,
    },
    toggleBtnText: {
      color: darkMode ? "#000" : "#fff",
      fontWeight: 500,
    },
  });

  return styles;
};

export default AppStyle;
