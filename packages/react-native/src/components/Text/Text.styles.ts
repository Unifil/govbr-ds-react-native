import { StyleSheet } from "react-native";
import {
  fontWeights,
  fontSizes,
  lineHeights,
  colors,
} from "@unifil/tokens";

export const styles = StyleSheet.create({
  text: {
    color: colors.blue,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    fontWeight: fontWeights.regular,
  },
});