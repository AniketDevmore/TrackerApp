import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native"
import IconButton from "../components/UI/IconButton";
import { colors } from "../assets/Colors";

const ManageExpense = ({ route, navigation }: any) => {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        })
    }, [navigation, isEditing]);

    const deleteHandler = () => {

    }

    return (
        <View style={styles.container}>
            
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
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: colors.primary200,
        alignItems: 'center'
    }
})