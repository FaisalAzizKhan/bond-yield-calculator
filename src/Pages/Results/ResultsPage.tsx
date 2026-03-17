import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Button } from "react-native";
import { useEffect, useState } from "react";
import { ResultsPageStyles } from "./ResultsPage.Styles";
import { calculateCurrentYield, calculateTotalInterest, calculateYTM } from "./ResultsPage.Helper";


export const ResultsPage = ({ route, navigation }: IResultsPageProps) => {
  
  const [currentYield, setCurrentYield] = useState(0);
  const [ytm, setYTM] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [status, setStatus] = useState("");
  const userData: any = route?.params?.userData;

  useEffect(() => {
    const currYield = calculateCurrentYield(
      userData?.annualCouponRate,
      userData?.faceValue,
      userData?.marketPrice
    );
    const ytmCalc = calculateYTM(
      userData?.faceValue,
      userData?.annualCouponRate,
      userData?.marketPrice,
      userData?.yearsToMaturity
    );
    const totalInt = calculateTotalInterest(
      userData?.annualCouponRate,
      userData?.faceValue,
      userData?.yearsToMaturity,
      userData?.couponFrequency
    );
    const bondStatus =
      userData?.marketPrice > userData?.faceValue
        ? "Premium"
        : userData?.marketPrice < userData?.faceValue
        ? "Discount"
        : "At Par";

    setCurrentYield(currYield);
    setYTM(ytmCalc);
    setTotalInterest(totalInt);
    setStatus(bondStatus);
  }, [userData]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={ResultsPageStyles.container}>
        <Text style={ResultsPageStyles.heading}>Bond Calculation Results</Text>

        <View style={ResultsPageStyles.card}>
          <Text style={ResultsPageStyles.cardKey}>Current Yield: <Text style={ResultsPageStyles.cardValue}>{currentYield.toFixed(2)}%</Text></Text>
          <Text style={ResultsPageStyles.cardKey}>Yield to Maturity (YTM): <Text style={ResultsPageStyles.cardValue}>{ytm.toFixed(2)}%</Text></Text>
          <Text style={ResultsPageStyles.cardKey}>Total Interest Earned: <Text style={ResultsPageStyles.cardValue}>{totalInterest.toFixed(2)}</Text></Text>
          <Text style={ResultsPageStyles.cardKey}>Status: <Text style={ResultsPageStyles.cardValue}>{status}</Text></Text>
        </View>

        <Button title="Back"  onPress={() => navigation.goBack()} />
          <View style={{ height: 20}} />
        <Button title="Next" onPress={() => navigation.navigate("CashFlowSchedulePage", { userData: userData })} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};


