import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import {usefonts} from 'expo-font';
import HomeScreen from './pages/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  //usefonts({
 //  'berkshire':require('./assets/fonts/berkshire.ttf')
 // })
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name="Login" options={{
          headerShown: false
        }}>
          {(props)=><LoginScreen {...props} />}
         </Stack.Screen>
          <Stack.Screen name="Register" options={{
         headerShown: false
          }}  >
          {(props)=><RegisterScreen {...props} />}
        </Stack.Screen>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
