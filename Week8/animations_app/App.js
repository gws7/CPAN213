import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EasingAnimation from './components/easingAnim';
import CombinedAnimations from './components/combiningAnims';
import ComposedAnimations from './components/composingAnims';
import InterpolationAnimation from './components/Interpolation';
import TrackedAnimation from './components/trackingAnims';
import App1 from './components/touchableComponents';
import App2 from './components/dragComponent';

export default function App() {
  return (
    <View >
      {/* <EasingAnimation></EasingAnimation> */}
      {/* <CombinedAnimations></CombinedAnimations> */}
      {/* <ComposedAnimations></ComposedAnimations> */}
      {/* <InterpolationAnimation></InterpolationAnimation> */}
      {/* <TrackedAnimation></TrackedAnimation> */}
      {/* <App1></App1> */}
      <App2></App2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
