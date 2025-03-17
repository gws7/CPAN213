import React, { useRef, useEffect, useState } from "react";
import { Animated, View, StyleSheet, Text } from "react-native";

const Box = (props) => {
    return(
        <Animated.View
            style={[
                styles.cube, 
                {top:props.Top, 
                backgroundColor:props.Color,
                right:props.Right, 
                width:100,
                }
            ]}
        >
            <Text style={{color:props.TextColor}}>
                {props.Text}
            </Text>
        </Animated.View>
    )
}

const InterpolationAnimation = () => {
    const animatedTop = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animatedTop, {toValue:100, duration: 10000}).start();

    }, [animatedTop]);

    return(
        <View style={{padding:50}}>
            <Box 
                Top={animatedTop}
                Text="Animated Component"
                Color={animatedTop.interpolate({inputRange:[0,100], outputRange:["red","yellow"]})}
                TextColor="black"
                Right={50}
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

export default InterpolationAnimation;