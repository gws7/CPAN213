import React, { useState } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import globalStyles from '../shared/GlobalStyles';

const PanExample = () => {

  const dragPosition = 0
  const dragResponder = 0

  const doubleTapPosition = 0;
  const doubleTapResponder = () => {
    //operations to perform when the ball is double-tapped
  };

  const [longPressVisible, setLongPressVisible] = useState(true);

  const handleLongPress = () => {
    //operations to perform when the rocket is long-pressed
  };

  const resetLongPress = () => {
    setLongPressVisible(true);

    //operations to perform when the rocket is reset
  };

  return (
    <View style={globalStyles.panContainer}>


      <Text style={globalStyles.shapeBlock}>🌺</Text>
      <Text style={globalStyles.infoText}>Drag the flower anywhere on screen</Text>

      <Text style={globalStyles.shapeBlock}>🏀</Text>
      <Text style={globalStyles.infoText}>Double-Tap the ball</Text>

      {longPressVisible ? (


        <TouchableWithoutFeedback onLongPress={handleLongPress}>
          <Text style={globalStyles.shapeBlock}>🚀</Text>
        </TouchableWithoutFeedback>


      ) : (

        <TouchableWithoutFeedback onPress={resetLongPress}>
          <Text style={[globalStyles.infoText, { color: "green" }]}>Block disappeared! Tap to reset.</Text>
        </TouchableWithoutFeedback>

      )}
      <Text style={globalStyles.infoText}>LongPress the rocket</Text>

    </View>
  );
};

export default PanExample;
