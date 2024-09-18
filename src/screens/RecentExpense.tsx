import { Text } from "react-native"
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

const RecentExpense = () => {
    const expenseCtx = useContext(ExpensesContext);
    const recentExpenses = expenseCtx.expenses.filter((expense:any)=>{
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return (expense.date >= date7DaysAgo) && (expense.data <= today)
    })
    return(
        <ExpensesOutput expenses={recentExpenses} periodName='Last 7 days' fallbackText={"No expenses registered for last 7 days!"}/>

    )
}

export default RecentExpense;