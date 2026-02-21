import { StatusBar } from 'expo-status-bar';

import { AppProviders } from '@src/contexts/app-providers';
import HomeScreen from '@src/screens/home-screen';

export default function App() {
  return (
    <AppProviders>
      <StatusBar style="auto" />
      <HomeScreen />
    </AppProviders>
  );
}
