import { Platform, StyleSheet } from "react-native";
import { colors } from "@unifil/tokens";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 14,
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    marginBottom: Platform.OS === "ios" ? 38 : 24,
    width: "100%",
    height: 84,
    justifyContent: "space-around",
    alignItems: "center",
    bottom: 0,
    backgroundColor: colors.white,
    flexDirection: "row",
    borderRadius: 15,
    gap: 8,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.8,
  },
  buttonTab: {
    justifyContent: "center",
    alignItems: "center",
  },
});
