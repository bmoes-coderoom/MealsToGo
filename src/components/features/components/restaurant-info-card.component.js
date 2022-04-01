import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import {Text} from 'react-native';
import { Card } from 'react-native-paper';
import {theme} from '../../../infrastructure/theme/index';

const Title = styled(Text)`
    padding: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};

`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const RestaurantInfoCard = ({restaurant = {}}) => {
    const {
        name = 'Some Restaurant'
        ,icon
        ,photos = [
            'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'
        ]
        ,address = '123 Fake St'
        ,isOpenNow = true
        ,rating = 4
        ,isClosedTemporarily
        } = restaurant;
    return(
        <ThemeProvider theme={theme}>
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </RestaurantCard>
        </ThemeProvider>

    );
}