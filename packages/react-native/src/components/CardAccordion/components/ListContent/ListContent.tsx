import React from 'react'

import { StyleSheet, TextProps, View } from 'react-native'

import { RneFunctionComponent } from '../../CardAccordion.props'

export interface ListItemContentProps extends TextProps {
  right?: boolean
}

export const ListItemContent: RneFunctionComponent<ListItemContentProps> = ({
  style,
  right,
  children,
  ...rest
}: any) => {
  const containerStyle = right ? styles.rightContainer : styles.container
  return (
    <View style={[containerStyle, style]} {...rest}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  rightContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
})

ListItemContent.displayName = 'ListItem.Content'
