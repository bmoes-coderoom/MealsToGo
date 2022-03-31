import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/components/features/screens/restaurants.screen";

export default function App() {

  return (
    <>
    <RestaurantsScreen/>
      <ExpoStatusBar style="auto" />
    </>
  );
}