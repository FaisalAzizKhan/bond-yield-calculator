interface IUserInputsPageStyle {
  textInput: TextStyle;  
  textLabel: TextStyle;  
}

interface ITextInputBlockProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

interface IUserData {
  faceValue: number;
  annualCouponRate: number;
  marketPrice: number;
  yearsToMaturity: number;
  couponFrequency: string;
}