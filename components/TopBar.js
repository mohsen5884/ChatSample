import react from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import ImageView from "./ImageView";

export default function TopBar() {
  return (
    <View style={styles.TopBarContainer}>
      <View style={styles.LeftContainer}>
        <Image
          style={styles.BackIcon}
          source={require("../assets/images/Back.png")}
        />
        <View style={styles.ImageView}>
          <ImageView />
        </View>
        <View style={styles.PersonInfoContainer}>
          <Text>Sample Person</Text>
          <Text>Active 7h ago</Text>
        </View>
      </View>
      <View style={styles.RightContainer}>
        <Image
          style={styles.RightImage}
          source={require("../assets/images/Top2.png")}
        />
        <Image
          style={styles.RightImage}
          source={require("../assets/images/Top1.png")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  TopBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#cccccc",
    height: 60,
    borderBottomColor: "Gray",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  LeftContainer: {
    flexDirection: "row",
    alignContent: "center",
  },
  BackIcon: {
    marginHorizontal: 8,
    width: 20,
    height: 30,
    alignSelf: "center",
  },
  PersonInfoContainer: {
    flexDirection: "column",
    marginHorizontal: 8,
    alignSelf: "center",
  },
  RightContainer: {
    flexDirection: "row",
  },
  RightImage: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
    alignSelf: "center",
  },
  ImageView:{
    alignSelf: "center",
  }
});
