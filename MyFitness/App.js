import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//import component
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

