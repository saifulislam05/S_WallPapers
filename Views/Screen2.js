import React, { useEffect, useState } from "react";
import {
  PermissionsAndroid,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";


const Screen2 = ({ route }) => {
  const { clickedImage } = route.params;
  const [imageData, setImageData] = useState();

  useEffect(() => {
    setImageData(JSON.parse(clickedImage));
  }, []);

  // const downloadImage = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       const { uri } = imageData.cover_photo.urls;
  //       const downloadDest = `${RNFS.ExternalStorageDirectoryPath}/${uri
  //         .split("/")
  //         .pop()}`;
  //       const ret = await RNFS.downloadFile({
  //         fromUrl: uri,
  //         toFile: downloadDest,
  //       });
  //       if (ret.statusCode === 200) {
  //         console.log("Image download success");
  //       }
  //     } else {
  //       console.log("Permission denied");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <View style={styles.imageContainer}>
      {typeof imageData == "object" && (
        <Image
          source={{ uri: imageData.cover_photo.urls.regular }}
          style={styles.image}
        />
      )}

      <TouchableOpacity style={styles.downloadBtn} >
        <Text style={styles.donwloadBtnText}>Download</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextBtn}>
        <Text style={styles.nextBtnText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  downloadBtn: {
    position: "absolute",
    left: 60,
    bottom: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#000",
    elevation: 20,
    borderRadius: 20,
  },
  donwloadBtnText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
  },
  nextBtn: {
    position: "absolute",
    right: 60,
    bottom: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#000",
    elevation: 20,
    borderRadius: 20,
  },
  nextBtnText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
  },
});

export default Screen2;
