import React from 'react';
import styled from 'styled-components/native';
import {Text, View, Image} from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from '../../../../assets/open';

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Title = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};

`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Open = styled(SvgXml)`
    flex-direction: row;
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

        const ratingArray = Array.from(new Array(Math.floor(rating)));

    return(
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
                <Info>
                    <Title>{name}</Title>
                    <Section>
                    <Rating>
                        {
                            ratingArray.map((item, i) => (
                                <SvgXml key={i} xml={star} width={20} height={20} />
                            ))
                        }
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="label" style={{ color: "red" }}>
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <View style={{ paddingLeft: 16 }} />
                        {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        <View style={{ paddingLeft: 16 }} />
                        <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
                    </SectionEnd>
                    </Section>
  
                    <Address>{address}</Address>
                </Info>
        </RestaurantCard>
    );
}