import { Keyboard, Text, View } from "react-native"
import Input from "../Input/Input";
import { colors } from "../../assets/Colors";
import styles from "./ExpenseForm.styles";
import { useState } from "react";

const ExpenseForm = () => {
    const [inputValue, setInputValue] = useState({
        amount: '',
        date: '',
        description: ''
    })
    const inputChangeHandler = (inputIndentifier:any,enteredAmount:any) => { 
        setInputValue((currentValue: any)=>{
            return {
                ...currentValue,
                [inputIndentifier]: enteredAmount
            }
        });
    };
    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputRow}>
                <Input label={'Amount'} textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangeHandler.bind(this, 'amount'),
                    value: inputValue.amount
                }} 
                styles={styles.rowInput}
                />
                <Input label={'Date'} textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    placeholderTextColor: colors.primary200,
                    maxLength: 10,
                    onChangeText: inputChangeHandler.bind(this, 'date'),
                    value: inputValue.date
                }} 
                styles={styles.rowInput}
                />
            </View>
            <Input label={'Description'} textInputConfig={{
                multiline: true,
                onChangeText: inputChangeHandler.bind(this, 'description'),
                value: inputValue.description
                // autoCapitalize: 'none'
                // autocorrect: false
            }} />
        </View>
    )
}

export default ExpenseForm;