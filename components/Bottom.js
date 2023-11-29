import react from "react";
import { TextInput, View, StyleSheet, Image } from "react-native";

export default function Bottom() {
  return (
    <View style={styles.BottomContainer}>
      <View style={styles.ContentContainer}>
        <Image
          style={styles.ImageIcon}
          source={require("../assets/images/Camera.png")}
        />
        <TextInput style={styles.TextContent} placeholder="Message ..." />
      </View>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.ImageIcon}
          source={require("../assets/images/Botton3.png")}
        />
        <Image
          style={styles.ImageIcon}
          source={require("../assets/images/Botton2.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BottomContainer: {
    borderColor: "darkGray",
    borderRadius: 80,
    borderWidth: 2,
    height: 60,
    margin: 5,
    padding: 5,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#cccccc",
  },
  ContentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  ImageIcon: {
    height: 25,
    width: 25,
    marginHorizontal: 5,
    alignSelf: "center",
  },
  TextContent: {
    alignSelf: "center",
    fontSize: 20,
    width: 200,
  },
  ImageContainer: {
    flexDirection: "row",
  },
});
