import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sarwar ISO App!</Text>
      <Text>Full Stack Software Engineer</Text>
      <StatusBar style="auto" />
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/108589375?v=4",
        }}
        style={{ width: 100, height: 100 }}
      />
      {/* View */}
      <View style={styles.second}>
        {/* Text */}
        <Text style={{ color: "white" }}>First Android</Text>
      </View>
      <View>
        {/* Image */}
        <Image
          source={require("./assets/favicon.png")}
          style={{ width: 50, height: 50 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  second: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    marginTop: 10,
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
});
