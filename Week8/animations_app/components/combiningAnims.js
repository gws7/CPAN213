import React, { useRef, useEffect, useState } from "react";
import { Animated, View, StyleSheet, Text } from "react-native";

const Box = (props) => {
    return(
        <Animated.View
            style={[
                styles.cube, 
                {top:props.Top, backgroundColor:props.Color,left:props.Left, width:100}
            ]}
        >
            <Text style={{color:props.TextColor}}>
                {props.Text}
            </Text>
        </Animated.View>
    )
}

const CombinedAnimations = () => {
    const a = useRef(new Animated.Value(0)).current;
    const b = useRef(Animated.multiply(2,a)).current;

    Animated.spring(a, {toValue: 100}).start();

    return(
        <View>
            <Box Top={a} Text="A" Color="#fcb103" TextColor = "black" Left={150} />
            <Box Top={b} Text="B" Color="#fc03b5" TextColor = "black" Left={40} />
        </View>
    )
}

export default CombinedAnimations

const styles = StyleSheet.create({
    cube: {
        position:"absolute",
        borderWidth:1,
        borderColor:"purple",
        borderRadius: 8,
        padding:10,
        shadowColor:"#000",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    }
})