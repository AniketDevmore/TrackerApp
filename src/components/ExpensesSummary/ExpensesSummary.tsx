import { FlatList, Text, View } from "react-native"
import styles from "./ExpenseSummary.styles";

const ExpensesSummary = ({expenses, periodName}:any) => {
    const expensesSum = expenses.reduce((sum:any, expense:any) => (sum + expense.amount), 0);
    console.log('----------------->>', expensesSum, expenses, periodName)
    return(
            <View style={styles.container}>
                <Text style={styles.period}>{periodName}</Text>
                <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
            </View>
    )
}

export default  ExpensesSummary;