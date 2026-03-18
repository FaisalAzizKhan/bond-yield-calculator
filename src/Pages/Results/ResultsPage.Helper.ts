export const calculateCurrentYield = (
  couponRate: number,
  faceValue: number,
  marketPrice: number
) => {
  const annualCoupon = (couponRate / 100) * faceValue;
  return (annualCoupon / marketPrice) * 100;
};

export const calculateYTM = (
  faceValue: number,
  couponRate: number,
  marketPrice: number,
  years: number
) => {
  const annualCoupon = (couponRate / 100) * faceValue;
  return (
    ((annualCoupon + (faceValue - marketPrice) / years) /
      ((faceValue + marketPrice) / 2)) *
    100
  );
};

export const calculateTotalInterest = (
  couponRate: number,
  faceValue: number,
  years: number,
  frequency: string
) => {
  const annualCoupon = (couponRate / 100) * faceValue;
  const periods = frequency && frequency?.toLowerCase() === "semi-annual" ? years * 2 : years;
  const couponPerPeriod =  frequency && frequency?.toLowerCase() === "semi-annual" ? annualCoupon / 2 : annualCoupon;
  return couponPerPeriod * periods;
};
