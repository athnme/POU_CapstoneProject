import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

import styled from "styled-components/native";

// Import Icons
import {
  BackIcon,
  CloseIcon,
  HomeIcon,
  LikeIcon,
  IndicatorIcon,
  MarkUserIcon,
  NotificationIcon,
  OptionsIcon,
  SearchIcon,
  Wordmark,
  AddIcon,
  LogoIcon,
} from "./components/Icons";

// Import Buttons
import {
  BackButton,
  CloseButton,
  HomeButton,
  LikeButton,
  MarkButton,
  NotificationButton,
  OptionsButton,
  SearchButton,
  AddButton,
  DefaultButton,
  CtaButton,
} from "./components/Buttons";

const Container = styled.ScrollView`
  flex: 1;
  background-image: linear-gradient(180deg, #07211f 3.28%, #030d12 96.74%);
  row-gap: 16px;
  color: #cecece;
  padding: 16px;
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

const NavButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  width: 20%;
  max-width: 168px;
`;

// Icons

// Profile Pic

const ProfilePicXL = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: solid 2px #cecece;
`;

const ProfilePicXLActive = styled(ProfilePicXL)`
  border-color: #33d17c;
`;

const ProfilePicL = styled(ProfilePicXL)`
  width: 64px;
  height: 64px;
`;

const ProfilePicLActive = styled(ProfilePicL)`
  border-color: #33d17c;
`;

const ProfilePicM = styled(ProfilePicXL)`
  width: 48px;
  height: 48px;
`;

const ProfilePicMActive = styled(ProfilePicM)`
  border-color: #33d17c;
`;

const ProfilePicS = styled(ProfilePicXL)`
  width: 24px;
  height: 24px;
`;

const ProfilePicSActive = styled(ProfilePicS)`
  border-color: #33d17c;
`;

// Input

const TextField = styled.TextInput`
  height: 40px;
  width: 100%;
  padding: 24px;
  border-radius: 40px;
  background-color: #030d12;
  color: rgba(206, 206, 206, 0.5);
`;

// Bars

const BottomNavBar = styled.View`
  height: 56px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #030d12;
  position: fixed;
  bottom: 0;
`;

const TopNavBar = styled.View`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 16px;
  background-color: #000;
  justify-content: center;
`;

const Comps = styled.View`
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
  margin: 16px 16px 40px;
`;

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />

      <HeaderThree>TYPOGRAPHY --</HeaderThree>
      <Comps>
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
      </Comps>

      <HeaderThree>ICONS --</HeaderThree>
      <Comps>
        <BackIcon />
        <CloseIcon />
        <HomeIcon />
        <LikeIcon />
        <IndicatorIcon />
        <MarkUserIcon />
        <NotificationIcon />
        <OptionsIcon />
        <SearchIcon />
        <Wordmark />
        <AddIcon />
        <LogoIcon />
      </Comps>

      <HeaderThree>BUTTONS --</HeaderThree>
      <Comps>
        <DefaultButton />
        <CtaButton />
        <BackButton />
        <CloseButton />
        <HomeButton />
        <LikeButton />
        <MarkButton />
        <NotificationButton />
        <OptionsButton />
        <SearchButton />
        <AddButton />
      </Comps>

      <Comps>
        <TextField value={"Text Input"} />
      </Comps>

      <Comps></Comps>

      <Comps>
        <ProfilePicXL source={require("./assets/Profile_Pic.jpg")} />
        <ProfilePicL source={require("./assets/Profile_Pic.jpg")} />
        <ProfilePicM source={require("./assets/Profile_Pic.jpg")} />
        <ProfilePicS source={require("./assets/Profile_Pic.jpg")} />

        <ProfilePicXLActive source={require("./assets/Profile_Pic.jpg")} />
        <ProfilePicLActive source={require("./assets/Profile_Pic.jpg")} />
        <ProfilePicMActive source={require("./assets/Profile_Pic.jpg")} />
        <ProfilePicSActive source={require("./assets/Profile_Pic.jpg")} />
      </Comps>

      <Comps></Comps>
    </Container>
  );
}
