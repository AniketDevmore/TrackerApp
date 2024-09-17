import { Pressable, Text, View } from "react-native";
import styles from "./ExpenseItem.styles";

const ExpenseItem = ({ description, amount, date }: any) => {
    console.log('===============>>', description, amount, date )
    return (
        <Pressable>
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.textBase}>{date.toString()}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ExpenseItem;