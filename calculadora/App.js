import React, { useMemo, useState } from 'react';
import { StatusBar, StyleSheet, Text, Pressable, View } from 'react-native';

import CalcButton from "./components/CalcButton";
import Display from "./components/Display";
import { themes } from "./theme/token";
import { createEngine } from "./utils/calcEngine";

export default function App() {
  const [mode, setMode] = useState("dark");
  const theme = themes[mode];

  return (
    <View style={[styles.container, {backgroundColor: theme.bg}]}>
      <StatusBar barStyle={"dark" ? "light-content" : "dark-content"} />

      <View style={styles.topBar}>
        <Pressable
        onPress={() => setMode((m) => (m === "dark" ? "light" : "dark"))}
        style={({pressed}) => [
          styles.toggle,
          {
            backgroundColor: theme.card,
            opacity: pressed ? 0.75 : 1,
            borderColor: theme.stroke
          }
        ]}>
          <Text style={{ color: theme.text, fontWeight: "700"}}>
            {mode ==="dark" ? "Escuro" : "Claro"}
          </Text>
        </Pressable>
      </View>

        <Display
          theme={theme}
          expression={"100+"}
          value={0}
        />


        <View style={styles.pad}>
          {/*Linha 1*/}
          <View style={styles.row}>
            <CalcButton theme={theme} label="C" variant="neutral" onPress={() => {}} />
            <CalcButton theme={theme} label="+/-" variant="neutral" onPress={() => {}} />
            <CalcButton theme={theme} label="%" variant="neutral" onPress={() => {}} />
            <CalcButton theme={theme} label="÷" variant="op" onPress={() => {}} />
          </View>

        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal:18,
    paddingTop: 40,
  },
  topBar: {
    alignItems: "flex-end",
    marginBottom: 6,
  },
  toggle: {
    paddingHorizontal:14,
    paddingVertical: 8,
    borderRadius: 14,
    borderWidth: 1,
  },
  pad: {
    gap: 14,
    paddingBottom: 18,
  },
  row:{
    flexDirection: "row",
    gap: 14,
  }
});