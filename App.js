import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Home from './app/Home';
import ArtistDetails from './app/ArtistDetails';
import ArtworkDetails from './app/ArtworkDetails';

import { COLORS, icons, images, SIZES  } from './constants';
import ScreenHeaderBtn from './components/common/header/ScreenHeaderBtn';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      DMBold: require('./assets/fonts/DMSans-Bold.ttf'),
      DMMedium: require('./assets/fonts/DMSans-Medium.ttf'),
      DMRegular: require('./assets/fonts/DMSans-Regular.ttf'),
    });
    setFontsLoaded(true);
    SplashScreen.hideAsync();
  };

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ 
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "", 
          // headerLeft: () => (
          //   <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          // ),
          // headerRight: () => (
          //   <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          // ),
          }} />
        <Stack.Screen name="ArtistDetails" component={ArtistDetails} options={{ title: '画家详情' }} />
        <Stack.Screen name="ArtworkDetails" component={ArtworkDetails} options={{ title: '画作详情' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


