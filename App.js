import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box4]} />
        {/* here priority will be most of box4 not box */}
      </View>
      <Footer />
    </SafeAreaView>
  );
}

function Header() {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Sarwar Android/IOS App
      </Text>
      <Text>Software Developer</Text>
    </View>
  );
}

function Footer() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.nav}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.itemText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nav}
        onPress={() => navigation.navigate("Note")}
      >
        <Text style={styles.itemText}>Note</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nav}
        onPress={() => navigation.navigate("Image")}
      >
        <Text style={styles.itemText}>Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nav}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.itemText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    minHeight: "100%",
    paddingTop: 20,
    flex: 1,
    // gap: 30,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#f8f8f8",
    borderTopWidth: 1,
    borderColor: "#e7e7e7",
  },
  nav: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    shadowColor: "#000",
  },
  itemText: {
    color: "#007aff",
    fontSize: 16,
  },
  box: {
    height: 100,
    width: 100,
  },
  box1: {
    backgroundColor: "red",
  },
  box2: {
    backgroundColor: "green",
  },
  box3: {
    backgroundColor: "blue",
    width: 200,
  },
  box4: {
    backgroundColor: "yellow",
  },
});
