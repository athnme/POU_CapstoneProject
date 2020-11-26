import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-image: linear-gradient(180deg, #07211f 3.28%, #030d12 96.74%);
  row-gap: 16px;
  padding: 16px;
  color: #cecece;
`;

//Typography

const Paragraph = styled.Text`
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
  color: inherit;
  text-align: inherit;
`;

const HeaderOne = styled(Paragraph)`
  font-size: 32px;
  line-height: 36px;
  font-weight: 700;
  letter-spacing: 0.25px;
`;

const HeaderTwo = styled(Paragraph)`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0.25px;
`;

const HeaderThree = styled(Paragraph)`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.25px;
`;

const HeaderFour = styled(Paragraph)`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;
`;

const HeaderFive = styled(Paragraph)`
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
`;

const HeaderSix = styled(Paragraph)`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
`;

const ParagraphBold = styled(Paragraph)`
  font-weight: 700;
`;

const Caption = styled(Paragraph)`
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
`;

const CaptionBold = styled(Caption)`
  font-weight: 700;
`;

const Placeholder = styled(Paragraph)`
  font-size: 12px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;
`;

// Buttons

const BtnDefault = styled.TouchableOpacity`
  max-width: 180px;
  border-radius: 20px;
  border: solid 2px #cecece;
  align-items: center;
  justify-content: center;
  padding: 6px 20px;
  text-align: center;
`;

const BtnCTA = styled(BtnDefault)`
  border: none;
  color: #07211f;
  background: #33d17c;
`;

const ShadowCTA = styled.View`
  width: calc(100% - 32px);
  height: calc(100% - 16px);
  background: #33d17c;
  filter: blur(16px);
  z-index: -1;
  opacity: 0.84;
  position: absolute;
  top: 16px;
`;

// Icons

const IconDefault = styled.Image`
  width: 24px;
  height: 24px;
`;

const IconTall = styled(IconDefault)`
  height: 32px;
`;

const LogoType = styled(IconDefault)`
  width: 41px;
`;

const LogoHorizontal = styled(IconDefault)`
  width: 264px;
  height: 110px;
`;

const LogoVertical = styled(IconDefault)`
  width: 100px;
  height: 175px;
`;

const Comps = styled.View`
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
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

      <Comps>
        <BtnDefault>
          <Placeholder>Default Button</Placeholder>
        </BtnDefault>
        <BtnCTA>
          <Placeholder>CTA Button</Placeholder>
          <ShadowCTA></ShadowCTA>
        </BtnCTA>
      </Comps>

      <Comps>
        <IconDefault source={require("./assets/Back.svg")} />
        <IconDefault source={require("./assets/Close.svg")} />
        <IconDefault source={require("./assets/Home_Active.svg")} />
        <IconDefault source={require("./assets/Home.svg")} />
        <IconDefault source={require("./assets/Like_Active.svg")} />
        <IconDefault source={require("./assets/Like_Liked.svg")} />
        <IconDefault source={require("./assets/Like.svg")} />
        <IconDefault source={require("./assets/Location_Indicator.svg")} />
        <IconDefault source={require("./assets/Mark_User.svg")} />
        <IconDefault
          source={require("./assets/Notification_Active_Alert.svg")}
        />
        <IconDefault source={require("./assets/Notification_Active.svg")} />
        <IconDefault source={require("./assets/Notification_Alert.svg")} />
        <IconDefault source={require("./assets/Notification.svg")} />
        <IconDefault source={require("./assets/Options.svg")} />
        <IconDefault source={require("./assets/Search_Active.svg")} />
        <IconDefault source={require("./assets/Search.svg")} />

        <IconTall source={require("./assets/Add.svg")} />
        <IconTall source={require("./assets/Logo_Icon.svg")} />

        <LogoType source={require("./assets/LogoType.svg")} />

        <LogoHorizontal source={require("./assets/Logo_Horizontal.svg")} />
        <LogoVertical source={require("./assets/Logo_Vertical.svg")} />
      </Comps>
    </Container>
  );
}
