import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RecoilRoot } from 'recoil';
import Navbar from './Views/Navbar';
import Screen1 from './Views/Screen1';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RecoilRoot>
        <Navbar />
        <Screen1/>
      </RecoilRoot>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:'100%',
    marginTop:20,
    alignItems: 'center',
  },
});
