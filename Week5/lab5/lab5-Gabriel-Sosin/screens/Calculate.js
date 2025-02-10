import { View, Text, TouchableOpacity } from "react-native"
import GlobalStyles from "../shared/GlobalStyles";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Calculate = ({route, navigation}) => {
    const { userQuantity } = route.params;
    const calculatedPrice = userQuantity*5

    const Proceed = () => {
        navigation.navigate("Final Price", {finalPrice : calculatedPrice})
    }

    return(
        <View style={GlobalStyles.mainContainer}>
            <View style={GlobalStyles.subContainer}>
                <FontAwesome6 name="money-bill-1" size={30} color="green" />
                <Text style={GlobalStyles.titleText}>Quantity Entered</Text>
                <FontAwesome6 name="money-bill-1" size={30} color="green" />
            </View>

            <View style={GlobalStyles.subContainer}>
                <View>
                    <Text style={GlobalStyles.quantityText}>{userQuantity} product(s)</Text>
                </View>
            </View>

            <View style={[GlobalStyles.subContainer, { transform: [{ rotate: '90deg' }], marginLeft: 40 }]}>
                <FontAwesome5 name="equals" size={24} color="green" />
            </View>

            <View style={[GlobalStyles.subContainer, {marginTop: -40}]}>
                <View>
                    <Text style={GlobalStyles.quantityText}>${calculatedPrice}</Text>
                </View>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: "5%", width: "80%", alignSelf: "center"}}>
                <View style={{flex: 1, height: 3, backgroundColor: "green", marginTop:15}} />     
            </View>

            <View style={GlobalStyles.subContainer}>
                <Text>Proceed to see your final receipt</Text>
            </View>

            <View style={GlobalStyles.subContainerProceed}>
                <TouchableOpacity onPress={ () => Proceed()}>
                    <Text style={GlobalStyles.buttonStyle}>Proceed</Text>
                </TouchableOpacity>                
            </View>
                
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: "5%", width: "80%", alignSelf: "center"}}>
                <View style={{flex: 1, height: 3, backgroundColor: "green", marginTop:15}} />     
            </View>

            <View style={GlobalStyles.footerText}>
                <Text style={GlobalStyles.footerInfo}>In this app you may input the number of products you have chosen and the you will be presented with the total and a final bill</Text>
                <Text style={GlobalStyles.footerInfo}> REMINDER: Each product's base price is $5</Text>
            </View>
            
            <View style={{alignSelf: "center", marginTop: 10}}>
                <FontAwesome5 name="copyright" size={24} color="green" />
            </View>
        </View>
    )
}

export default Calculate;