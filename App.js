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

// Import ProfilePics
import {
  ProfilePicL,
  ProfilePicL_Active,
  ProfilePicM,
  ProfilePicM_Active,
  ProfilePicS,
  ProfilePicS_Active,
  ProfilePicXL,
  ProfilePicXL_Active,
} from "./components/ProfilePics";

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
  ProfileButton,
} from "./components/Buttons";

// -- Styles

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

// Input

const TextField = styled.TextInput`
  height: 40px;
  width: 100%;
  padding: 24px;
  border-radius: 40px;
  background-color: #030d12;
  color: rgba(206, 206, 206, 0.5);
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

      <HeaderThree>PROFILE PICS --</HeaderThree>
      <Comps>
        <ProfilePicXL />
        <ProfilePicL />
        <ProfilePicM />
        <ProfilePicS />
        <ProfilePicXL_Active />
        <ProfilePicL_Active />
        <ProfilePicM_Active />
        <ProfilePicS_Active />
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
        <ProfileButton />
      </Comps>

      <Comps>
        <TextField value={"Text Input"} />
      </Comps>

      <Comps></Comps>
    </Container>
  );
}
