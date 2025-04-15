import { StatusBar } from 'expo-status-bar';
import { Provider } from "react-redux";
import store from './redux/store';
import AppNavigator from './nav/Navigator';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
      <StatusBar style="light" />
    </Provider>
  );
}
