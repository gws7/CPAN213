import React, { useState } from 'react';
import {
    View,
    Text,
} from 'react-native';
import globalStyles from '../shared/GlobalStyles';

const AnimationExample = () => {
    const [shapes, setShapes] = useState(["❄️"]);

    const createShape = () => {
        //create shape at regular interval and and add it to the shapes array
    };

    const animateShape = () => {
        //animate the shape
    };

    return (
        <View style={globalStyles.animationContainer}>
            <View style={globalStyles.gameArea}>
                {
                    shapes.map((shape) => (
                        <Text style={globalStyles.shapeText}>❄️</Text>
                    ))
                }
            </View>
        </View>
    );
};

export default AnimationExample;
