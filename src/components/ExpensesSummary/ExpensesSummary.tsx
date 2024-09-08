import { FlatList, Text, View } from "react-native"

const ExpensesSummary = ({expenses, periodName}:any) => {
    const expensesSum = expenses.reduce((sum:any, expense:any) => (sum + expense.amount), 0);
    console.log('----------------->>', expensesSum, expenses, periodName)
    return(
        <View>
            <View>
                <Text>{periodName}</Text>
                <Text>${expensesSum.toFixed(2)}</Text>
            </View>
        </View>
    )
}

export default  ExpensesSummary;