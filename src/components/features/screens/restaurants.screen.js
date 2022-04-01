import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import {
    StatusBar,
    SafeAreaView,
    View,
  } from "react-native";
  import { Searchbar } from "react-native-paper";
  import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
  import {theme} from '../../../infrastructure/theme/index';
  
const SafeArea = styled(SafeAreaView)`
          flex: 1;
          ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
          padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled(View)`
          flex: 1;
          padding: ${(props) => props.theme.space[3]};

`;


export const RestaurantsScreen = () => {
    return (
      <ThemeProvider theme={theme}>
                <SafeArea>
        <SearchContainer>
          <Searchbar/>
        </SearchContainer>
        <RestaurantListContainer>
          <RestaurantInfoCard/>
        </RestaurantListContainer>
      </SafeArea>

      </ThemeProvider>

    );

}