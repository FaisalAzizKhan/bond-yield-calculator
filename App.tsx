import { NavigationContainer } from "@react-navigation/native";
import { MainRoutes } from "./src/Routes/MainRoutes";
import { Provider } from "react-redux";
import { store } from "./src/Store/Store/Store";

export default function App() {
  return (
    <Provider store={store}>
      <MainRoutes />
    </Provider>
  );
}
