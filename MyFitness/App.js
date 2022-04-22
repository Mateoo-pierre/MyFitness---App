import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

//import component
import { HomeScreen } from './screens/HomeScreen';
import { AthleteScreen } from './screens/AthleteScreen';
import { WorkoutScreen } from './screens/WorkoutScreen/WorkoutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20, backgroundColor: '#EFEFEF' }} >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='home'
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='athlete'
            component={AthleteScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='workout'
            component={WorkoutScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}


