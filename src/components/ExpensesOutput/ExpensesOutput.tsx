import { View } from "react-native"
import ExpensesSummary from "../ExpensesSummary/ExpensesSummary";
import ExpensesList from "../ExpensesList/ExpensesList";
import styles from "./ExpensesOutput.styles";


const ExpensesOutput = ({expenses,  periodName}:any) => {
    console.log('periodName---------->>',periodName)
    return(
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={periodName}/>
            <ExpensesList data={expenses}/>
        </View>
    )
}

export default  ExpensesOutput;