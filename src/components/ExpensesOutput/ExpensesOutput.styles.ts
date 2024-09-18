import { StyleSheet } from "react-native";
import { colors } from "../../assets/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        backgroundColor: colors.primary700
    },
    infoText:{
        color:'#FFF',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32
    }
})

export default styles;