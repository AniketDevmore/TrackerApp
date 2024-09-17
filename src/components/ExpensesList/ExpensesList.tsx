import { FlatList, Text, View } from "react-native"

const ExpensesList = (data:any) => {
    console.log('data----------->>', data.data)
    return(
        <FlatList
        data={data.data}
        keyExtractor={(item:any, key:any) => key}
        renderItem={({item}:any)=>(
            <View>
                <Text style={{color:'#000'}}>{item.description}</Text>
            </View>
        )}
        />
    )
}

export default ExpensesList;