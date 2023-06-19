import React from "react";
import {  View, Text } from "react-native";
import {
  fontWeights,
  colors,
} from "@unifil/tokens";

export const Avatar = () => {
  return (
    <View style={{
      width: 37,
        height: 37,
        borderRadius: 50,
        backgroundColor: colors.green,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }}> 
        <Text
          style={{
            color: colors.white,
            fontSize: 16,
            fontWeight: fontWeights.bold,
          }}
    >HS</Text>
    </View>
  );
};
 