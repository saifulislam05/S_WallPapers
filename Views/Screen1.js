import React, { useEffect, useState } from 'react'
import { Text,View,StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import {useRecoilState} from 'recoil'
import { inputtextwallpaper } from '../atoms/wallpaperInputText';
import Navbar from './Navbar';

const Screen1 = ({navigation}) => {
  const access_key = "B3HB7ZSVgJuYTI5B8V1u-EO1DhL1XPdvg4Wrtrdqyac";
  const [searchValue, setSearchValue] = useRecoilState(inputtextwallpaper);
  const [imageCollection,setImageCollection]=useState([])
  
  // console.log(searchValue);

  useEffect(() => {
    const getImageCollection = async () => {
    let data = await fetch(
      `https://api.unsplash.com/search/collections?page=1&per_page=40&query=${searchValue}&client_id=${access_key}`
      ); 
      let jsonData = await data.json()
      setImageCollection(jsonData)
      console.log(jsonData.results[0].cover_photo.urls.regular);
    }
    getImageCollection();
  }, [searchValue]);
  

imageCollection.total==0 && setSearchValue('all')

  const ShowWallpaper = (item) => {
    navigation.navigate('screen2',{clickedImage:`${JSON.stringify(item)}`})
  }
  return (
    <View style={styles.container}>
      <Navbar/>
      <Text>{searchValue} related images</Text>
      <FlatList
        numColumns={2}
        data={imageCollection.results}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => ShowWallpaper(item)}>
              <Image
                source={{ uri: item.cover_photo.urls.regular }}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
        width: "100%",
      height:'100%',
    backgroundColor: 20,
    paddingVertical: 10,
        alignItems: "center",
  },
  imageContainer: {
    width: 200,
    height: 300,
    backgroundColor: "white",
    padding: 8,

  },
  image: {
    width: '100%',
    height: '100%',
  }
});
export default Screen1