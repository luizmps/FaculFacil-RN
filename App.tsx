import React from 'react';
import { StatusBar } from 'react-native';

import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import { SingIn } from './src/screens/SingIn';
import { Home } from './src/screens/Home';
import { Background } from './src/components/Background';

export default function App() {

  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {/* <SingIn /> */}
      <Home />
    </Background>
  );
}