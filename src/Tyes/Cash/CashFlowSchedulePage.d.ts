interface IUserData {
  faceValue: number;
  annualCouponRate: number;
  marketPrice: number;
  yearsToMaturity: number;
  couponFrequency: string;
}

interface ICashFlowRow {
  period: number;
  date: string;
  coupon: number;
  cumulativeInterest: number;
  remainingPrincipal: number;
}
