import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, {useState, useEffect} from "react";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyDXASlC6pazUf-t_XKIbeKaiu00EuiWalg",
  authDomain: "mealstogo-99825.firebaseapp.com",
  projectId: "mealstogo-99825",
  storageBucket: "mealstogo-99825.appspot.com",
  messagingSenderId: "697096099408",
  appId: "1:697096099408:web:619f045a39fbb96228a355"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
            <FavouritesContextProvider>
              <LocationContextProvider>
                <RestaurantsContextProvider>
                  <Navigation />
                </RestaurantsContextProvider>
              </LocationContextProvider>
            </FavouritesContextProvider>
          </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}