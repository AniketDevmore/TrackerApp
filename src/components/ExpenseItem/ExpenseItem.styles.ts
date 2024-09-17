import { StyleSheet } from "react-native";
import { colors } from "../../assets/Colors";

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: colors.primary500,
        flexDirection: 'row',
        justifyContent: "space-between",
        borderRadius: 6,
        shadowColor: colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4
    },
    textBase: {
        color: '#fff'
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80
    },
    amount: {
        color: colors.primary500,
        fontWeight: 'bold'
    }
})

export default styles;