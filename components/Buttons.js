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

import {
  BackIcon,
  CloseIcon,
  HomeIcon,
  LikeIcon,
  MarkUserIcon,
  NotificationIcon,
  OptionsIcon,
  SearchIcon,
  Wordmark,
  AddIcon,
  LogoIcon,
} from "./Icons";

// Styles

const BtnDefault = styled.TouchableOpacity`
  padding: 6px 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 100%;
  border: solid 2px #cecece;
  color: #cecece;
`;

const BtnCta = styled(BtnDefault)`
  border: none;
  color: #07211f;
  background: #33d17c;
`;

const btnIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export function DefaultButton() {
  return (
    <BtnDefault>
      <Text>Default Button</Text>
    </BtnDefault>
  );
}

export function CtaButton() {
  return (
    <BtnCta>
      <Text>CTA Button</Text>
    </BtnCta>
  );
}

export function BackButton() {
  return (
    <btnIcon>
      <BackIcon />
    </btnIcon>
  );
}

export function CloseButton() {
  return (
    <btnIcon>
      <CloseIcon />
    </btnIcon>
  );
}

export function HomeButton() {
  return (
    <btnIcon>
      <HomeIcon />
    </btnIcon>
  );
}

export function LikeButton() {
  return (
    <btnIcon>
      <LikeIcon />
    </btnIcon>
  );
}

export function MarkButton() {
  return (
    <btnIcon>
      <MarkUserIcon />
    </btnIcon>
  );
}

export function NotificationButton() {
  return (
    <btnIcon>
      <NotificationIcon />
    </btnIcon>
  );
}

export function SearchButton() {
  return (
    <btnIcon>
      <SearchIcon />
    </btnIcon>
  );
}

export function OptionsButton() {
  return (
    <btnIcon>
      <OptionsIcon />
    </btnIcon>
  );
}

export function AddButton() {
  return (
    <btnIcon>
      <AddIcon />
    </btnIcon>
  );
}
