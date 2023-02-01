import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RecoilRoot } from 'recoil';
import Screen1 from './Views/Screen1';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen2 from './Views/Screen2';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (


      <RecoilRoot style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="screen1">
            <Stack.Screen name="screen1" component={Screen1}
              options={{
                title: 'Home',
                headerStyle: {
                  backgroundColor: '#42f5b0'
                },
                headerTitleAlign:'center'
              }}
          />
          <Stack.Screen name='screen2' component={Screen2}/>
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>

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
