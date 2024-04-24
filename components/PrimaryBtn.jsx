import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

export default function PrimaryBtn({ text, handlePress}) {
  return (
    <Pressable
    onPress={handlePress}
    style={({ pressed }) => [
      {
        backgroundColor: pressed
          ? 'rgb(210, 230, 255)'
          : '#29648F'
      },
      styles.wrapperCustom
    ]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
    backgroundColor: '#29648F',
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    color: '#EADECF',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 1.4
  }
})