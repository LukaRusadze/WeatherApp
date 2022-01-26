import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, GestureResponderEvent } from "react-native";

interface IProps {
  text: string,
  onPress: (event: GestureResponderEvent) => void,
}

function CustomButton({ text, onPress }: IProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.customBtn}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  customBtn: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: 25,
  },
});

export default CustomButton;
