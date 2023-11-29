import {View, Image,StyleSheet} from 'react-native';

export default function ImageView(props) {
    return (
        <View>
            <Image source={require("../assets/images/Person.jpg")} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 30,
      borderColor: "red",
      borderWidth: 3,
    },
  });
  