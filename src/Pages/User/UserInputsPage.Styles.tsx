import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface IUserInputsPageStyle {
  textInput: TextStyle;
  textLabel: TextStyle;
  container: ViewStyle;
  picker: ViewStyle;
}

export const UserInputsPageStyle: IUserInputsPageStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F9F9F9",  
  },
  textLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    color: "#333",  
  },
  textInput: {
    height: 48,
    borderColor: "#CCC",  
    borderWidth: 1,
    borderRadius: 8,  
    paddingHorizontal: 12,
    marginBottom: 16, 
    backgroundColor: "#FFF",
    fontSize: 16,
  },
  picker: {
    height: 50,
    borderColor: "#CCC",  
    borderWidth: 1,
    borderRadius: 8, 
    paddingHorizontal: 3,
    marginBottom: 16, 
    backgroundColor: "#FFF",
    fontSize: 12,
  },
});
