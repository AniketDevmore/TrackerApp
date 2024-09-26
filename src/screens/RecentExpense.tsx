import { Text } from "react-native"
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";

const RecentExpense = () => {
    // const expenseCtx = useContext(ExpensesContext);

    const [fetchedExpenses, setFetchedExpenses] = useState<any>([]);

    useEffect(() => {
        const fetchExpenses = async () => {
          const expenses =  await getExpenses();
          console.log('expenses---------->>',expenses)
          setFetchedExpenses(expenses);
        }

        fetchExpenses();
    }, []);

    const recentExpenses = fetchedExpenses.filter((expense: any) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        console.log('today------>>', today, date7DaysAgo)
        return (expense.date >= date7DaysAgo) && (expense.date <= today)
    })
    return (
        <ExpensesOutput expenses={recentExpenses} periodName='Last 7 days' fallbackText={"No expenses registered for last 7 days!"} />

    )
}

export default RecentExpense;