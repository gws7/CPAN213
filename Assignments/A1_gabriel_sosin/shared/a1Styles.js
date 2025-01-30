import { StyleSheet } from "react-native";
import { COLORS } from "./consts";

const a1Styles = StyleSheet.create({
    title: {
        // backgroundColor: "red",
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 30,
        color: COLORS.secondary,
        marginTop: 20
    },

    subtitle: {
        fontStyle: "italic",
        fontSize: 15,
        color: COLORS.third
    },
    
    homeContainer: {
        flex: 1,
        // backgroundColor: "red",
        alignItems: "center",
        justifyContent: "flex-start",
    },

    image: {
        width: 100, 
        height: 100,
        resizeMode: "cover",
        marginVertical: 30
    },

    label: {
        color: COLORS.third,
        fontWeight: "bold",
        marginTop: 10,
        fontSize: 30
    },

    input: {
        color: COLORS.third,
        borderColor: COLORS.secondary,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10,
        width: 200,
        paddingHorizontal: 20,
        textAlign: "center"
        // backgroundColor: "red"
    },

    buttonText: {
        color: COLORS.third,
        fontSize: 15,
        padding: 10,
        marginTop: 15,
        borderWidth: 1,
        borderColor: COLORS.secondary,
        borderRadius: 10
    }

})

export default a1Styles