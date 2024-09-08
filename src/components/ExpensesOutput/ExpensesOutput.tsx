import { View } from "react-native"
import ExpensesSummary from "../ExpensesSummary/ExpensesSummary";
import ExpensesList from "../ExpensesList/ExpensesList";

const DUMMY_EXPENSE = [
    {
        id:'1',
        description: 'Pair of Shoes',
        amount: 67.98,
        date: new Date('2024-9-09')
    },
    {
        id:'2',
        description: 'Pair of Shirts',
        amount: 34.98,
        date: new Date('2024-19-19')
    },
    {
        id:'3',
        description: 'Apple',
        amount: 4.98,
        date: new Date('2024-29-19')
    },
];

const ExpensesOutput = ({expenses,  periodName}:any) => {
    console.log('periodName---------->>',periodName)
    return(
        <View>
            <ExpensesSummary expenses={DUMMY_EXPENSE} periodName={periodName}/>
            <ExpensesList data={DUMMY_EXPENSE}/>
        </View>
    )
}

export default  ExpensesOutput;