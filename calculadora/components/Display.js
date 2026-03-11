import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Display({ theme, expression, value }) {
  return (
    <View
      style={[
        styles.wrap,
        {
          backgroundColor: theme.card,
          borderColor: theme.stroke,
          shadowColor: theme.shadowDark,
        }
      ]}
    >
      <Text 
        numberOfLines={1}
        style={[styles.expression, { color: theme.textDim }]}
      >
        {expression}
      </Text>
      <Text 
        numberOfLines={1}
        style={[styles.value, { color: theme.text }]}
      >
        {value}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    borderWidth: 1,
    borderRadius: 26,
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 14,
    marginBottom: 18,
    shadowOpacity: 0.35,
    shadowRadius: 22,
    shadowOffset: { width: 0, height: 14},
    elevation: 8
  },
  expression: {
    fontSize: 14,
    letterSpacing: 0.2,
    textAlign: 'right',
    marginBottom: 6,
  },
  value: {
    fontSize: 56,
    fontWeight: "600",
    textAlign: 'right'
  }
})