import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type IconButtonProps = {
  color: string
  text: string
  textColor?: string
} & TouchableOpacityProps

export function IconButton({
  text,
  textColor,
  color,
  ...buttonProps
}: IconButtonProps) {
  return (
    <TouchableOpacity
      {...buttonProps}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color,
        height: 40,
        borderRadius: 20,
        margin: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC',
      }}
    >
      <Text
        style={{
          color: textColor,
          fontSize: 16,
          fontWeight: 'bold',
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}
