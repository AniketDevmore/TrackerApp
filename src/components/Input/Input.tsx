import { StyleSheet, Text, TextInput, View } from "react-native"
import { colors } from "../../assets/Colors";

const Input = ({label, textInputConfig, styles, invalid }: any) => {
   
    const inputStyles:any = [style.input];

    if(textInputConfig && textInputConfig.multiline){
        inputStyles.push(style.inputMultiline)
    }
    return (
        <View style={[style.inputContainer, styles]}>
            <Text style={[style.lable, invalid && style.inValidLabel]}>{label}</Text>
            <TextInput style={[inputStyles, invalid && style.invalidinput]} {...textInputConfig}/>
        </View>
    )
}

export default Input;

const style = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8
    }, 
    lable:{
        fontSize: 12,
        color: colors.primary100,
        marginBottom: 4
    },
    input: {
        backgroundColor: colors.primary100,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
        color: colors.primary700
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    },
    inValidLabel: {
        color: colors.error50,
    },
    invalidinput:{
        backgroundColor: colors.error50,
    }
})