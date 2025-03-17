import React, { Component, useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, PanResponder, Animated } from 'react-native';
function Box(props) {
    var panPosition = new Animated.ValueXY({ x: props.X, y: props.Y });
    var panOffset = { x: props.X, y: props.Y };
    panPosition.addListener((value) => { panOffset = value; });
    var panResponder = React.useRef(PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
            panPosition.setOffset({ x: panOffset.x, y: panOffset.y });
            panPosition.setValue({ x: 0, y: 0 });
        },
        //onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
        onPanResponderMove: (event, gesture) => {
            panPosition.setValue({ x: gesture.dx, y: gesture.dy });
        }
    })).current;
    return (
        <Animated.View {...panResponder.panHandlers} style={[{
            transform: panPosition.getTranslateTransform()
        }, styles.box]} />);
}
const App2 = () => (
    <View style={styles.mainContainer}>
        <Box X={100} Y={0} /><Box X={100} Y={500} /></View>);
const styles = StyleSheet.create({
    mainContainer: { flex: 1 }, box: {
        backgroundColor: 'purple', width: 100, height: 100, borderRadius: 10
    },
});
export default App2;