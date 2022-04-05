import React from 'react';
import { Text, View, Image } from 'react-native';
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";
export const MapCallout = ({ restaurant }) => {
    return (
        <CompactRestaurantInfo restaurant={restaurant} />
    );

};