import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import TopBar from "./components/TopBar";
import Bottom from "./components/Bottom";
import ImageView from "./components/ImageView";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StatusBar style={styles.StatusBar} />
      <View>
        <TopBar />
      </View>
      <View style={styles.ContentContainer}>
        <View style={styles.LeftContainer}>
          <ImageView />
          <View style={styles.TextContainer}>
            <Text style={styles.Text}>Salam Vaght Be kheir?</Text>
            <Text style={styles.Text}>Sefaresh chasb Dashtam?</Text>
          </View>
        </View>
      </View>
      <View style={styles.Bottom}>
        <Bottom />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  StatusBar: {
    backgroundColor: "Red",
  },
  appContainer: {
    paddingTop: 30,
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: "#a8a8a8",
  },
  ContentContainer: {
    flex: 1,
    backgroundColor: "#a8a8a8",
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  LeftContainer: {
    flexDirection: "row",
  },
  TextContainer: {
    paddingHorizontal: 5,
    alignSelf: "center",
  },
  Text:{
    fontSize:16,
    marginVertical: 5,
    fontWeight:'bold',
    borderColor:'#cccccc',
    borderWidth:2,
    borderRadius:10,
    paddingVertical:8,
    paddingHorizontal:15,
  }
});
