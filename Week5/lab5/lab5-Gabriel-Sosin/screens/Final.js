import { View, Text } from "react-native";
import GlobalStyles from "../shared/GlobalStyles";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Final = ({ route }) => {
    const { finalPrice } = route.params;
    const tax = finalPrice * 0.13;
    const totalPrice = finalPrice + tax;

    return (
        <View style={GlobalStyles.mainContainer}>
            <View style={GlobalStyles.subContainer}>
                <FontAwesome6 name="receipt" size={30} color="green" />
                <Text style={GlobalStyles.titleText}>Final Receipt</Text>
                <FontAwesome6 name="receipt" size={30} color="green" />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <Text style={GlobalStyles.quantityText}>Subtotal: ${finalPrice.toFixed(2)}</Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <FontAwesome5 name="plus" size={24} color="green" />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <Text style={GlobalStyles.quantityText}>Tax (13%): ${tax.toFixed(2)}</Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <FontAwesome5 name="equals" size={24} color="green" />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <Text style={GlobalStyles.quantityText}>Total Price: ${totalPrice.toFixed(2)}</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: "5%", width: "80%", alignSelf: "center" }}>
                <View style={{ flex: 1, height: 3, backgroundColor: "green" }} />
            </View>

            <View style={GlobalStyles.footerText}>
                <Text style={GlobalStyles.footerInfo}>Thank you for using our calculator</Text>
                <Text style={GlobalStyles.footerInfo}> REMINDER: Each product's base price is $5</Text>
            </View>

            <View style={{ alignSelf: "center", marginTop: 10 }}>
                <FontAwesome5 name="copyright" size={24} color="green" />
            </View>
        </View>
    );
};

export default Final;
