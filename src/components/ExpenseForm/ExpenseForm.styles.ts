import { StyleSheet } from "react-native";
import { colors } from "../../assets/Colors";


const styles = StyleSheet.create({
    form: {
        marginTop: 40
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.whiteColor, 
        marginVertical: 24,
        textAlign: 'center'
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1,
    }
})

export default styles;