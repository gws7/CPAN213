import { StyleSheet } from "react-native";

const a2Style = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    loginText: {
        paddingVertical: "5%",
        alignSelf: "center",
        fontSize: 20,
    },
    inputStyle: {
        padding: 5, 
        marginBottom: 20,
        borderWidth: 3,
        borderRadius: 20,
        width: "80%",
        alignSelf: "center",
        borderColor: "coral",
        backgroundColor: "orange"
    },
    inputTextTitle: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 18
    },
    inputField: {
        borderWidth: 3,
        borderRadius: 15,
        marginHorizontal: 15,
        marginVertical: 10,
        borderColor: "coral",
        backgroundColor: "wheat",
        paddingLeft: 10
    },
    button: {
        alignSelf: "center",
    },
    dashboardTitleText: {
        fontSize: 18,
        alignSelf: "center",
        padding: 10,
    },
    horizontalLine: {
        borderBottomColor: 'orange', 
        borderBottomWidth: 3,
        borderRadius: 5, 
        width: '80%', 
        alignSelf: 'center', 
        marginVertical: 20
    },
    pickerField: {
        borderWidth: 3,
        borderRadius: 15,
        marginHorizontal: 15,
        marginVertical: 10,
        borderColor: "coral",
        backgroundColor: "wheat",
    },
    dashboardText: {
        fontSize: 15,
        alignSelf: "center",
        marginBottom: 20
    }, 
    bookingTextTitle: {
        fontSize: 18,
        alignSelf: "center",
        padding: 10
    },
    bookingFieldAccept: {
        borderWidth: 3,
        borderRadius: 15,
        marginHorizontal: 15,
        marginVertical: 10,
        borderColor: "coral",
        backgroundColor: "lightgreen",
        paddingLeft: 10,
        textAlign: "center",
        fontWeight: "bold",
        padding: 10,
        color: "green"
    },
    acceptedText: {
        textAlign: "center",
        fontSize: 12,
        fontStyle: "italic",
        marginBottom: 5,
        fontWeight: "bold"
    },
    bookingFieldDeny: {
        borderWidth: 3,
        borderRadius: 15,
        marginHorizontal: 15,
        marginVertical: 10,
        borderColor: "coral",
        backgroundColor: "crimson",
        paddingLeft: 10,
        textAlign: "center",
        fontWeight: "bold",
        padding: 10,
        color: "orange"
    },
    infoText: {
        borderWidth: 3,
        borderRadius: 15,
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 10,
        borderColor: "coral",
        backgroundColor: "wheat",
        gap: 3,
    },
    bookingIcon: {
        alignSelf: "center",
        paddingBottom: 20
    },
    deleteButton: {
        alignSelf: 'center',
        padding: 10,
        marginTop: 5
    }
}) 

export default a2Style;