import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native"
import IconButton from "../components/UI/IconButton";
import { colors } from "../assets/Colors";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ExpenseForm/ExpenseForm";

const ManageExpense = ({ route, navigation }: any) => {
   const expensesCtx = useContext(ExpensesContext);
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    // const selectedExpense = 

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        })
    }, [navigation, isEditing]);

    const deleteHandler = () => {
        expensesCtx.deleteExpense(editedExpenseId)
        navigation.goBack();

    }
    const cancelHandler = () => {
        navigation.goBack();
        
    }
    const confirmHandler = (expenseData:any) => {
        if (isEditing) {
        expensesCtx.updateExpense(editedExpenseId, expenseData);
        }else{
        expensesCtx.addExpense({description: 'Test', amount: 19.98, date: new Date('2024-09-15'), id:10});
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ExpenseForm onCancel={cancelHandler} submitButtonLable={isEditing ? 'Update' : 'Add'} onSubmit={confirmHandler}/>
            {/* <View style={styles.buttonContainer}>
                <Button style={styles.button} mode={'flat'} onPress={cancelHandler}>Cancel</Button>
                <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View> */}
            {
                isEditing &&
                <View style={styles.deleteContainer}>
                    <IconButton icon={'trash'} color={colors.error500} size={36} onPress={deleteHandler} />
                </View>
            }
        </View>
    )
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: colors.primary800
    },
    // buttonContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // button:{
    //     minWidth: 120,
    //     marginHorizontal: 8
    // },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: colors.primary200,
        alignItems: 'center'
    }
})