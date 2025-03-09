import React from "react";
import AppNavigator from "./AppNavigation";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator></AppNavigator>
    </Provider>
  );
}
