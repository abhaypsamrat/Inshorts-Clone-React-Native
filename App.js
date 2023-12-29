import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import InshortTab from "./components/InshortTab";
import Context from "./API/Context";

function App() {
  return (
    <View style={{ ...styles.container, backgroundColor: "#282C35" }}>
      <InshortTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
