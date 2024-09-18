import { Text, View } from "react-native"
import ExpensesSummary from "../ExpensesSummary/ExpensesSummary";
import ExpensesList from "../ExpensesList/ExpensesList";
import styles from "./ExpensesOutput.styles";


const ExpensesOutput = ({expenses,  periodName, fallbackText}:any) => {
    console.log('periodName---------->>',periodName);

    let content = <Text style={styles.infoText}>{fallbackText}</Text>;

    if(expenses.length > 0){
        content = <ExpensesList data={expenses}/>
    }
    return(
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={periodName}/>
            {content}
        </View>
    )
}

export default  ExpensesOutput;