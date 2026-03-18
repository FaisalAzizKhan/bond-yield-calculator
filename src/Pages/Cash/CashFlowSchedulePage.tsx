import React, { useMemo } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CashFlowSchedulePageStyles } from "./CashFlowSchedulePage.Styles";
import { UserInputsPageStyle } from "../User/UserInputsPage.Styles";


 
export const CashFlowSchedulePage = () => {
    const navigation: any = useNavigation();
  const route = useRoute();
  const { userData } = route.params as { userData: IUserData };

  const frequencyMap: Record<string, number> = {
    Annual: 1,
    "Semi-Annual": 2,
    Quarterly: 4,
  };

  const frequency = frequencyMap[userData.couponFrequency] || 1;

  const cashFlowData: ICashFlowRow[] = useMemo(() => {
    const totalPeriods = userData.yearsToMaturity * frequency;

    const couponPerPeriod =
      (userData.faceValue * userData.annualCouponRate) / 100 / frequency;

    let cumulativeInterest = 0;
    const today = new Date();

    const rows: ICashFlowRow[] = [];

    for (let i = 1; i <= totalPeriods; i++) {
      cumulativeInterest += couponPerPeriod;

      const paymentDate = new Date(today);
      paymentDate.setMonth(paymentDate.getMonth() + i * (12 / frequency));

      rows.push({
        period: i,
        date: paymentDate.toLocaleDateString(),
        coupon: parseFloat(couponPerPeriod.toFixed(2)),
        cumulativeInterest: parseFloat(cumulativeInterest.toFixed(2)),
        remainingPrincipal: i === totalPeriods ? 0 : userData.faceValue,
      });
    }

    return rows;
  }, [userData]);

  const renderItem = ({
    item,
    index,
  }: {
    item: ICashFlowRow;
    index: number;
  }) => (
    <View
      style={[
        CashFlowSchedulePageStyles.row,
        {
          backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F9FAFB",
        },
      ]}
    >
      <Text style={CashFlowSchedulePageStyles.cellText}>{item.period}</Text>

      <Text style={CashFlowSchedulePageStyles.cellText}>{item.date}</Text>

      <Text
        style={[
          CashFlowSchedulePageStyles.cellText,
          CashFlowSchedulePageStyles.rightText,
        ]}
      >
        {item.coupon.toFixed(2)}
      </Text>

      <Text
        style={[
          CashFlowSchedulePageStyles.cellText,
          CashFlowSchedulePageStyles.rightText,
        ]}
      >
        {item.cumulativeInterest.toFixed(2)}
      </Text>

      <Text
        style={[
          CashFlowSchedulePageStyles.cellText,
          CashFlowSchedulePageStyles.rightText,
          item.remainingPrincipal === 0 && { fontWeight: "bold" },
        ]}
      >
        {item.remainingPrincipal.toFixed(2)}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={CashFlowSchedulePageStyles.screen}>
      <Text style={CashFlowSchedulePageStyles.title}>Cash Flow Schedule</Text>

      <View style={CashFlowSchedulePageStyles.tableContainer}>
        {/* Header */}
        <View style={CashFlowSchedulePageStyles.headerRow}>
          <Text style={CashFlowSchedulePageStyles.headerText}>#</Text>
          <Text style={CashFlowSchedulePageStyles.headerText}>Date</Text>
          <Text
            style={[
              CashFlowSchedulePageStyles.headerText,
              CashFlowSchedulePageStyles.rightText,
            ]}
          >
            Coupon
          </Text>
          <Text
            style={[
              CashFlowSchedulePageStyles.headerText,
              CashFlowSchedulePageStyles.rightText,
            ]}
          >
            Cum. Int
          </Text>
          <Text
            style={[
              CashFlowSchedulePageStyles.headerText,
              CashFlowSchedulePageStyles.rightText,
            ]}
          >
            Principal
          </Text>
        </View>

        <FlatList
          data={cashFlowData}
          keyExtractor={(item) => item.period.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>

         <View style={UserInputsPageStyle.buttonContainer}>
              <Button title="Back"  onPress={() => navigation.goBack()} />
                <View style={{ height: 20}} />
              <Button title="Next" onPress={() => navigation.navigate("UserInputsPage", { userData: userData })} />
                </View>
    </SafeAreaView>
  );
};
