import { FlatList, Text, View } from "react-native"
import ExpenseItem from "../ExpenseItem/ExpenseItem"

const renderExpenseItem = (itemData:any) => {
    console.log(itemData)
    return <ExpenseItem {...itemData.item}/>
}

const ExpensesList = (data:any) => {
    console.log('data----------->>', data.data)

    return(
        <FlatList
        data={data.data}
        keyExtractor={(item:any, key:any) => key}
        renderItem={(item)=> renderExpenseItem(item)}
        />
    )
}

export default ExpensesList;