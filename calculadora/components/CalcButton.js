import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function CalcButton({ theme, label, onPress, Variant="num", wide=false}) {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})