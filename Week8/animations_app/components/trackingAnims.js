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
                }
            ]}
        >
            <Text style={{color:props.TextColor}}>
                {props.Text}
            </Text>
        </Animated.View>
    )
}

const TrackedAnimation = () => {
    const leader = useRef( new Animated.Value(0)).current;
    const follower = useRef( new Animated.Value(0)).current;

    Animated.spring(follower, {toValue:leader, mass:50, velocity:20}).start();
    Animated.timing(leader, {toValue:100}).start();

    return(
        <View>
            <Box 
                Top={leader} Text="Leader" Color="#1c9c33" TextColor="white" Left={150}
            />

            <Box 
                Top={follower} Text="Follower" Color="#601c9c" TextColor="white" Left={40}
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

export default TrackedAnimation