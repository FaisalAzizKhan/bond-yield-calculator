import { StyleSheet } from "react-native";

export const CashFlowSchedulePageStyles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F9FAFB",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
    color: "#111827",
  },

  tableContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2, // android shadow
  },

  headerRow: {
    flexDirection: "row",
    backgroundColor: "#F3F4F6",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: "#E5E7EB",
  },

  headerText: {
    flex: 1,
    fontWeight: "600",
    fontSize: 12,
    color: "#374151",
  },

  row: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: "#F1F5F9",
  },

  cellText: {
    flex: 1,
    fontSize: 13,
    color: "#111827",
  },

  rightText: {
    textAlign: "right",
  },
});
