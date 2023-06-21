import React, { ReactElement } from "react";
import { View } from "react-native";
import { WrapperProps } from "./Wrapper.props";
import { styles } from "./Wrapper.styles";

export const Wrapper = ({ children, ...rest }: WrapperProps): ReactElement => {
  return (
    <View style={[styles.container]} {...rest}>
      {children}
    </View>
  );
};
