import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        flex: 1,
        marginTop: 1
    },
    subContainer: {
        paddingTop: "10%",
        flexDirection: "row",   
        flexWrap: "wrap",       
        justifyContent: "space-around",
        alignItems: "flex-start",
        alignContent: "flex-end",
    },
    safeArea: {
        flex: 1,
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "green"
    },
    textInput: {
        width: "80%",  
        borderWidth: 1.5, 
        borderColor: "green",
        padding: 12,
        borderRadius: 8,
        fontSize: 16,       
        backgroundColor: "white", 
    },
    textInputTitle: {
        fontSize: 18,
        marginBottom: 25,
    },
    buttonStyle: {
        fontSize: 20,
        borderWidth: 2,
        padding: 10,
        borderRadius: 8,
        borderColor: "green",
        color: "green",
        backgroundColor: "white"
    },
    quantityText: {
        fontSize: 14,
        borderWidth: 2,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
        borderColor: "green",
        backgroundColor: "white",
        fontWeight: "bold",
        color: "green",
    },
    reminderText: {
        fontStyle: "italic",
        fontSize: 15
    },
    totalText: {
        borderWidth: 2,
        borderRadius: 5,
        padding: 15,
        fontWeight: "bold",
        backgroundColor: "white"
    },
    subContainerProceed : {
        paddingTop: "7.5%",
        flexDirection: "row",   
        flexWrap: "wrap",       
        justifyContent: "space-around",
        alignItems: "flex-start",
        alignContent: "flex-end",
    },
    footerText: { 
        alignSelf: "center",
        width: "70%",
        fontSize: "14",
        marginTop: "20",
    },
    footerInfo: {
        fontStyle: "italic",
        textAlign: "center"
    }
});

export default globalStyles;
