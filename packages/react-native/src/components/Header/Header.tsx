import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Avatar } from "../Avatar/Avatar";
import { HeaderProps } from "./Header.props";
import { styles } from "./Header.styles";

export const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      {props.onPress && (
        <TouchableOpacity onPress={props.onPress}>
          {props.icon}
        </TouchableOpacity>
      )}

      <View>{props.logo}</View>

      <Avatar></Avatar>
    </View>
  );
};
