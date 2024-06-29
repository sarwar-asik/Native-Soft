import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* View */}
      <Header></Header>
      <CountApp countFirst={1} />
      <Footer />
    </View>
  );
}

function FirstTest() {
  return (
    <View style={styles.second}>
      <Text>Sarwar ISO App!</Text>
      <Text style={{ marginTop: 10, marginBottom: 20 }}>
        Full Stack Software Engineer
      </Text>
      <StatusBar style="auto" />
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/108589375?v=4",
        }}
        style={{ width: 100, height: 100 }}
      />
      <Image
        source={require("./assets/favicon.png")}
        style={{ width: 50, height: 50 }}
      />
      <Text style={{ color: "white" }}>First Android</Text>
    </View>
  );
}

function Header() {
  return (
    <View>
      <Text>Sarwar Hossain</Text>
      <Text>Software Developer</Text>
    </View>
  );
}

function CountApp(props) {
  const { countFirst } = props;
  // console.log(countFirst);
  const [count, setCount] = useState(0);
  return (
    <View style={styles.second}>
      {/* <Text>{countFirst}</Text> */}
      <Text>Count: {count}</Text>
      <TouchableOpacity
        onPress={() => {
          setCount(count + 1);
        }}
        style={styles.button}
      >
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setCount(count - 1);
        }}
        style={{ ...styles.button, marginTop: 10 }}
      >
        <Text>Decrement</Text>
      </TouchableOpacity>
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
    // gap: 30,
  },
  second: {
    width: 200,
    height: 100,
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 120,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
});
