import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { CardProps } from "./CardNavigation.props";
import {
  fontWeights,
  fontSizes,
  colors,
  radii,
} from "@unifil/tokens";

export const CardNavigation = (props: CardProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableHighlight
      style={
        [
          {
            borderRadius: props.borderRadius,
            height: props.height,
            width: props.width,
            marginTop: props.marginTop, 
            marginBottom: props.marginBottom,
          },
          styles.container
        ]
      }
      onPress={props.onPress}
      activeOpacity={0.8}
      underlayColor={colors.blueLight}
      onShowUnderlay={() => {
        setIsPressed(true);
      }}
      onHideUnderlay={() => {
        setIsPressed(false);
      }}
    >
      <View style={[styles.containerContent]}>
        <View>
          <Text
            style={[
              styles.title,
              {
                color: isPressed ? colors.white : props.colorTitle,
                fontSize: props.sizeTitle,
              },
            ]}
          >
            {props.title}
          </Text>
          <Text
            style={[
              styles.text,
              {
                color: isPressed ? colors.white : props.colorText,
                opacity: isPressed ? 1 : 0.5,
                fontSize: props.sizeText,
              },
            ]}
          >
            {props.text}
          </Text>
        </View>
        <View>
          {props.icon}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingLeft: 30,
    paddingRight: 17,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radii.px,
    width: "100%",
    marginTop: 6,
    marginBottom: 6,
    height: 105,
    elevation: 10,
    shadowColor: "#00000040",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  containerContent: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    color: colors.darkBlue,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.medium,
    marginBottom: 6,
  },
  text: {
    color: colors.blue,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.regular,
    opacity: 0.5,
    maxWidth: 300,
  },
});
