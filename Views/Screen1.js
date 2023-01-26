import React from 'react'
import { Text,View,StyleSheet } from 'react-native'
import {useRecoilState} from 'recoil'
import { inputtextwallpaper } from '../atoms/wallpaperInputText';

const Screen1 = () => {
    const [searchValue, setSearchValue] = useRecoilState(inputtextwallpaper);
console.log(searchValue);
  return (
    <View style={styles.container}>
      <Text>{searchValue}</Text>
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
    backgroundColor:'yellow'
  },
});
export default Screen1