import { View, Text} from "react-native"
import GlobalStyles from "../shared/GlobalStyles";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Final = ({ route, navigation }) => {
    const { finalPrice } = route.params;

    return (
        <View style={GlobalStyles.mainContainer}>

            <View style={GlobalStyles.subContainer}>
                <FontAwesome6 name="money-bill-1" size={30} color="green" />
                <Text style={GlobalStyles.titleText}>Receipt</Text>
                <FontAwesome6 name="money-bill-1" size={30} color="green" />
            </View>

        </View>
    );
};

export default Final;
