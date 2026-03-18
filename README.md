```bash 

git add . && git commit -m "March 18: backbutton added" && git push



# Bond Yield Calculator

A **React Native** mobile app that calculates bond yields and displays a detailed cash flow schedule. Built with **TypeScript** for type safety and clean architecture. Perfect for finance demos and technical interviews.

---

## 📌 Features

- Input bond details:
  - Face Value
  - Annual Coupon Rate (%)
  - Market Price
  - Years to Maturity
  - Coupon Frequency (Annual / Semi-Annual / Quarterly)
- Outputs:
  - Current Yield
  - Yield to Maturity (YTM)
  - Total Interest Earned
  - Premium or Discount Indicator
- Cash Flow Schedule Table:
  - Period, Payment Date, Coupon, Cumulative Interest, Remaining Principal
- Clean and professional UI
- Load sample data for quick demos
- Right-aligned numbers for financial readability
- Alternating row colors for better UX

---

## 🛠 Tech Stack

- **React Native** – Mobile framework
- **TypeScript** – Type safety and clean code
- **React Navigation** – Screen navigation
- **Formik + Yup** – Input handling & validation
- **Day.js** – Date manipulation
- **Redux Toolkit + React-Redux** – For state management
- **React Query** – For API calls
- **Expo** – Development and building tools

---

## 📁 Project Structure

```
/screens
  UserInputsPage.tsx
  ResultsPage.tsx
  CashFlowSchedulePage.tsx

/components
  BondSummaryCard.tsx
  InputField.tsx

/services
  bond.service.ts

/types
  bond.ts

/utils
  helpers.ts
```

- `screens` – App pages  
- `components` – Reusable UI components  
- `services` – Business logic (calculations, YTM)  
- `types` – TypeScript interfaces  
- `utils` – Helper functions  

---

## 📌 Screenshots

### User Inputs Page
![User Inputs Page](https://raw.githubusercontent.com/FaisalAzizKhan/bond-yield-calculator/main/assets/UserInput.png)


### Results Page
![Results Page](https://raw.githubusercontent.com/FaisalAzizKhan/bond-yield-calculator/main/assets/Results.png)

### Cash Flow Schedule Page
![Cash Flow Schedule Page](https://raw.githubusercontent.com/FaisalAzizKhan/bond-yield-calculator/main/assets/CashFlow.png)

## 🚀 Getting Started

1. **Clone the repo**
```bash
git clone https://github.com/yourusername/bond-yield-calculator.git
cd bond-yield-calculator
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the app**
```bash
npm run start
```

4. **Run on device/emulator**
```bash
npm run android
npm run ios
```

---

## 💡 How It Works

<p align="center">
  <img src="https://raw.githubusercontent.com/FaisalAzizKhan/bond-yield-calculator/refs/heads/main/assets/CashFlow.png" alt="Source Code"></a>&nbsp;
  
</p>

1. Enter bond details in **User Inputs Page**.  
2. Press **Next** → Navigate to **Results Page**.  
3. Results page shows:
   - Current Yield
   - Yield to Maturity (YTM)
   - Total Interest
   - Premium / Discount  
4. Tap **View Cash Flow** → Navigate to **Cash Flow Schedule Page**.  
5. The cash flow table displays each period’s:
   - Coupon payment
   - Cumulative interest
   - Remaining principal
   - Payment date  

**YTM Calculation:**  
Uses iterative numerical methods (Binary Search / Newton-Raphson) since YTM cannot be solved algebraically.

---

## 🎨 UI / UX Highlights

- Alternating row colors for readability  
- Right-aligned numeric values  
- Bold principal repayment row  
- Card layout for cash flow table  
- Load sample data button for quick demo  

---

## 📜 License

This project is **private** and created for interview/demo purposes.

