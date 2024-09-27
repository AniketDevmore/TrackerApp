import { Text } from "react-native"
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";

const RecentExpense = () => {
    const expenseCtx = useContext(ExpensesContext);

    useEffect(() => {
        const fetchExpenses = async () => {
          const expenses =  await getExpenses();
          console.log('expenses---------->>',expenses);
            expenseCtx.setExpenses(expenses);
        }

        fetchExpenses();
    }, []);

    console.log(expenseCtx)
    const recentExpenses = expenseCtx.expenses.filter((expense: any) => {
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