import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function CityButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cityBtn}>
        <Text styles={styles.cityBtnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cityBtn: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: 25,
  },
});

export default CityButton;
