import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* View */}
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
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Note")}
        >
          <Text style={styles.buttonText}>Note</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 30,
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
  button: {
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "#007aff",
    fontSize: 16,
  },
});
