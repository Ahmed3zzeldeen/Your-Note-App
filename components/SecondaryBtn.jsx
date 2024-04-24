import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

export default function SecondaryBtn({ text, handlePress}) {
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
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#EADECF',
  },
  text: {
    color: '#29648F',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 1.4
  }
})