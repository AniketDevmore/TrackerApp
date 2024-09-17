import { StyleSheet } from "react-native";
import { colors } from "../../assets/Colors";

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    period: {
        fontSize: 14,
        color: colors.primary400
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.primary500
    }
})

export default styles;