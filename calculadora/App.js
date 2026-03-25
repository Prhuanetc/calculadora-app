import React, { useMemo, useState } from 'react';
import { StatusBar, StyleSheet, Text, Pressable, View } from 'react-native';

import CalcButton from "./components/CalcButton";
import Display from "./components/Display";
import { themes } from "./theme/token";
import { createEngine } from "./utils/calcEngine";

export default function App() {
  const [mode, setMode] = useState("dark");
  const theme = themes[mode];

  const engine = useMemo(() => createEngine({ locale: "pt-BR"}), []);
  const [state, setState] = useState(engine.initialState());

  function onKey(key) {
    setState((prev) => engine.reduce(prev, key));
  }

  return (
    <View style={[styles.container, {backgroundColor: theme.bg}]}>
      <StatusBar barStyle={mode === "dark" ? "light-content" : "dark-content"} />

      <View style={styles.topBar}>
        <Pressable
          onPress={() => setMode((m) => (m === "dark" ? "light" : "dark"))}
          style={({pressed}) => [
            styles.toggle,
            {
              backgroundColor : theme.card,
              opacity: pressed ? 0.75 : 1,
              borderColor: theme.stroke
            }
          ]}
        >
          <Text style={{ color: theme.text, fontWeight: "700"}}>
            {mode === "dark" ? "Escuro" : "Claro"}
          </Text>
        </Pressable>
      </View>

      <Display
        theme={theme}
        expression={"100+"}
        value={0}
      />

      <View style={styles.pad}>
        {/* Linha 1 */}
        <View style={styles.row}>
          <CalcButton theme={theme} label="C" variant="neutral" onPress={() => onKey("C")} />
          <CalcButton theme={theme} label="+/-" variant="neutral" onPress={() => onKey("SIGN")} />
          <CalcButton theme={theme} label="%" variant="neutral" onPress={() => onKey("%")} />
          <CalcButton theme={theme} label="÷" variant="op" onPress={() => onKey("/")} />
        </View>
        {/* linha 2 */}
         <View style={styles.row}>
          <CalcButton theme={theme} label="7" variant="num" onPress={() => onKey("7")} />
          <CalcButton theme={theme} label="8" variant="num" onPress={() => onKey("8")} />
          <CalcButton theme={theme} label="9" variant="num" onPress={() => onKey("9")} />
          <CalcButton theme={theme} label="x" variant="op" onPress={() => onKey("*")} />
        </View>
                  {/* linha 3 */}
         <View style={styles.row}>
          <CalcButton theme={theme} label="4" variant="num" onPress={() => onKey("4")} />
          <CalcButton theme={theme} label="5" variant="num" onPress={() => onKey("5")} />
          <CalcButton theme={theme} label="6" variant="num" onPress={() => onKey("6")} />
          <CalcButton theme={theme} label="-" variant="op" onPress={() => onKey("-")} />
        </View>
                {/* linha 4 */}
         <View style={styles.row}>
          <CalcButton theme={theme} label="1" variant="num" onPress={() => onKey("1")} />
          <CalcButton theme={theme} label="2" variant="num" onPress={() => onKey("2")} />
          <CalcButton theme={theme} label="3" variant="num" onPress={() => onKey("3")} />
          <CalcButton theme={theme} label="+" variant="op" onPress={() =>onKey("+")} />
        </View>
                {/* linha 5 */}
         <View style={styles.row}>
          <CalcButton theme={theme} label="0" variant="num" wide onPress={() => onKey("0")} />
          <CalcButton theme={theme} label="." variant="num" onPress={() => onKey(".")} />
          <CalcButton theme={theme} label="=" variant="op" onPress={() => onKey("=")} />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 18,
    paddingTop: 40,
  },
  topBar: {
    alignItems: "flex-end",
    marginBottom: 6,
  },
  toggle: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 14,
    borderWidth: 1,
  },
  pad: {
    gap: 14,
    paddingBottom: 18,
  },
  row: {
    flexDirection: 'row',
    gap: 14,
  }
});