import { Text } from "react-native"
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const RecentExpense = () => {
    const expenseCtx = useContext(ExpensesContext);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<any>(null);
    
    useEffect(() => {
        const fetchExpenses = async () => {
            setIsFetching(true);
            try{
                const expenses =  await getExpenses();
                expenseCtx.setExpenses(expenses);
            }catch (error){
                setError('Could not fetech expenses!')
            }
          setIsFetching(false);
        }

        fetchExpenses();
    }, []);

    if(error && !isFetching){
        return <ErrorOverlay message={error} />
    }

    if(isFetching){
        return <LoadingOverlay/>
    }

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