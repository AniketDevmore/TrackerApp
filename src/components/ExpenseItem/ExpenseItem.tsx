import { Pressable, Text, TouchableOpacity, View } from "react-native";
import styles from "./ExpenseItem.styles";
import { getFormettedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = ({ description, amount, date, id }: any) => {
    const navigation:any = useNavigation()
    console.log('itemData===============>>', description, amount, date, id )

    const expensePressHandler = () => {
        navigation.navigate('ManageExpense',{expenseId: id})
    }
    return (
        <TouchableOpacity onPress={expensePressHandler}>
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.textBase}>{getFormettedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ExpenseItem;