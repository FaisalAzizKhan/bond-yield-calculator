import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { UserInputsPageStyle } from "./UserInputsPage.Styles";
import {
  CustomPicker,
  CustomTextInput,
} from "../../Utilities/Inputs/CustomTextInput";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const inputFields = [
  { key: "faceValue", label: "Face Value", placeholder: "Enter Face Value" },
  {
    key: "annualCouponRate",
    label: "Annual Coupon Rate (%)",
    placeholder: "Enter Annual Coupon Rate",
  },
  {
    key: "marketPrice",
    label: "Market Price",
    placeholder: "Enter Market Price",
  },
  {
    key: "yearsToMaturity",
    label: "Years to Maturity",
    placeholder: "Enter Years to Maturity",
  },
  {
    key: "couponFrequency",
    label: "Coupon Frequency (Annual / Semi-Annual)",
    placeholder: "Enter Frequency",
  },
];

export const UserInputsPage = () => {
  const navigation: any = useNavigation();
  const frequencyOptions = ["Annual", "Semi-Annual", "Quarterly"];

  const [userData, setUserData] = useState<IUserData>({
    faceValue: 0,
    annualCouponRate: 0,
    marketPrice: 0,
    yearsToMaturity: 0,
    couponFrequency: "",
  });

  const handleChange = (key: keyof IUserData, value: string) => {
    setUserData((prev) => ({
      ...prev,
      [key]: key === "couponFrequency" ? value : parseFloat(value || "0"),
    }));
  };

  const handleNext = (userData: IUserData) => {
    navigation.navigate("ResultsPage" as never, { userData } as never);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={UserInputsPageStyle.container}>
        {inputFields.map((field) =>
          field.key === "couponFrequency" ? (
            <CustomPicker
              key={field.key}
              label={field.label}
              optionsList={frequencyOptions}
              placeholder={field.placeholder}
              selectedfrequency={userData[field.key as keyof IUserData]}
              setSelectedfrequency={(frequency: string) =>
                handleChange(field.key as keyof IUserData, frequency)
              }
            />
          ) : (
            <CustomTextInput
              key={field.key}
              label={field.label}
              placeholder={field.placeholder}
         
              value={userData[field.key as keyof IUserData].toString()}
              onChangeText={(text: any) =>
                handleChange(field.key as keyof IUserData, text)
              }
            />
          )
        )}

        <Button title="Next" onPress={() => handleNext(userData)} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
