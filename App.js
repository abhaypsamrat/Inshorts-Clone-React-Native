import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import InshortTab from "./components/InshortTab";

export default function App() {
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
