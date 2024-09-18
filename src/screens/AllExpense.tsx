import { Text } from "react-native"
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

const AllExpense = () => {
    const expenseCtx = useContext(ExpensesContext);
    return(
        <ExpensesOutput expenses={expenseCtx.expenses} periodName='Total'/>
    )
}

export default AllExpense;