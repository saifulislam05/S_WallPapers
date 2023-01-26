import React from 'react'
import { Text, View, StyleSheet,Image,TextInput,onChangeText } from "react-native";
import searchIcon from '../assets/searchIcon.png'
import { inputtextwallpaper } from '../atoms/wallpaperInputText';
import {useRecoilState} from 'recoil'
const Navbar = () => {
    const [searchValue, setSearchValue] = useRecoilState(inputtextwallpaper);
    onChangeTextInput = (text) => {
       setSearchValue(text)
        // console.log(searchValue);
    }
    return (
      <View style={styles.container}>
        <View style={styles.search_Container}>
          <Image style={styles.searchIcon} source={searchIcon} />
        <TextInput
            onChangeText={onChangeTextInput}
            style={styles.searchInput}
            placeholder={"Search anything..."}
          />
        </View>

      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    backgroundColor: 20,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  search_Container: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 10,
    padding: 10,
    borderRadius: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
    searchInput: {
        width: '90%',
        fontSize: 20,
        paddingLeft: 10,
        
  },
});

export default Navbar