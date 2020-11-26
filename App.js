import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-image: linear-gradient(180deg, #07211f 3.28%, #030d12 96.74%);
`;

//Typography

const HeaderOne = styled.Text`
  font-size: 32px;
  line-height: 36px;
  font-weight: 700;
  letter-spacing: 0.25px;
  color: #cecece;
`;

const HeaderTwo = styled.Text`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0.25px;
  color: #cecece;
`;

const HeaderThree = styled.Text`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.25px;
  color: #cecece;
`;

const HeaderFour = styled.Text`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;
  color: #cecece;
`;

const HeaderFive = styled.Text`
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
  color: #cecece;
`;

const HeaderSix = styled.Text`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: #cecece;
`;

const Paragraph = styled.Text`
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
  color: #cecece;
`;

const ParagraphBold = styled.Text`
  font-size: 10px;
  line-height: 12px;
  font-weight: 700;
  color: #cecece;
`;

const Caption = styled.Text`
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
  color: #cecece;
`;

const CaptionBold = styled.Text`
  font-size: 10px;
  line-height: 12px;
  font-weight: 700;
  color: #cecece;
`;

const Placeholder = styled.Text`
  font-size: 12px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;
  color: #cecece;
`;

// Buttons

const BtnDefault = styled.TouchableOpacity`
  max-width: 180px;
  height: 40px;
  border-radius: 20px;
  border: solid 2px #cecece;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

const BtnCTA = styled(BtnDefault)`
  border: none;
  background: #33d17c;
`;

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />

      <HeaderOne>HeaderOne</HeaderOne>
      <HeaderTwo>HeaderTwo</HeaderTwo>
      <HeaderThree>HeaderThree</HeaderThree>
      <HeaderFour>HeaderFour</HeaderFour>
      <HeaderFive>HeaderFive</HeaderFive>
      <HeaderSix>HeaderSix</HeaderSix>
      <Paragraph>Paragraph</Paragraph>
      <ParagraphBold>ParagraphBold</ParagraphBold>
      <Caption>Caption</Caption>
      <CaptionBold>CabtionBold</CaptionBold>
      <Placeholder>Placeholder</Placeholder>

      <BtnDefault>
        <Placeholder>Default Button</Placeholder>
      </BtnDefault>

      <BtnCTA>
        <Placeholder>CTA Button</Placeholder>
      </BtnCTA>
    </Container>
  );
}
