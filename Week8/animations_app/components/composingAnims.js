import React, { useRef, useEffect, useState } from "react";
import { Animated, View, StyleSheet, Text } from "react-native";

const Box = (props) => {
    return(
        <Animated.View
            style={[
                styles.cube, 
                {top:props.Top, 
                backgroundColor:props.Color,
                left:props.Left, 
                width:100,
                transform:[{rotate:props.RotateValue}]
                }
            ]}
        >
            <Text style={{color:props.TextColor}}>
                {props.Text}
            </Text>
        </Animated.View>
    )
}

const ComposedAnimations = () => {
    const position = useRef(new Animated.Value(-100)).current;
    const rotation = useRef(new Animated.Value(0)).current;

    Animated.sequence([

        Animated.timing(position, { toValue: 100}),
        Animated.timing(rotation, { toValue: 1, duration: 250}),
        Animated.timing(position, { toValue: -100, duration: 250 })
    ]).start();

    return(
        <View>
            <Box 
                Top={position}
                RotateValue={rotation.interpolate({inputRange: [0,1], outputRange: ["0deg", "360deg"]})}
                Text="Leader"
                Color="#1c9c33"
                TextColor="white"
                Left={150}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    cube:{
        position:"absolute",
        borderWidth: 1,
        borderColor: "purple",
        borderRadius: 8,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    }

})

export default ComposedAnimations