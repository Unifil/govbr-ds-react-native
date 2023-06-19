import React, { ReactElement } from 'react'

import { WrapperProps } from './Wrapper.props'
import { StyleSheet, View } from 'react-native'
import { colors } from "@unifil/tokens";

export const Wrapper = ({
  children,
  ...rest
}: WrapperProps): ReactElement => {
  return <View style={[styles.container]} {...rest}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: colors.white,
  },
});
