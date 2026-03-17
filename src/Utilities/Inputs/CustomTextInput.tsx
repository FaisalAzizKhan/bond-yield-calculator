import { UserInputsPageStyle } from "../../Pages/User/UserInputsPage.Styles";
import { Text, TextInput, View } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";

export const CustomTextInput: React.FC<any> = ({
  label,
  placeholder,
  value,
  onChangeText,
}: ITextInputBlockProps) => (
  <>
    <Text style={UserInputsPageStyle.textLabel}>{label}</Text>
    <TextInput
      style={UserInputsPageStyle.textInput}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  </>
);

export const CustomPicker: React.FC<any> = ({
  selectedfrequency,
  setSelectedfrequency,
  optionsList,
  label,
  style,
}) => {
  return (
    <View style={style}>
      <Text style={UserInputsPageStyle.textLabel}>{label}</Text>
      <View style={UserInputsPageStyle.picker}>
        <Picker
          selectedValue={selectedfrequency}
          onValueChange={(itemValue: any) =>
            setSelectedfrequency && setSelectedfrequency(itemValue)
          }
        >
          <Picker.Item label="Select" value="" />
          {optionsList.map((item: any, index: number) => (
            <Picker.Item key={index} label={item} value={item} />
          ))}
        </Picker>
      </View>
    </View>
  );
};
