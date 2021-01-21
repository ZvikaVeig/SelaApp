import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ListItemSeparator() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 1,
    backgroundColor: colors.secondary,
  },
});

export default ListItemSeparator;