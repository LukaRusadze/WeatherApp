import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function CustomButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.customBtn}>
        <Text styles={styles.customBtnText}>{text}</Text>
      </View>
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
