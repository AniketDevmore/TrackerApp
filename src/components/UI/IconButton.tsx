import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";

const IconButton = ({ icon, size, color, onPress }: any) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }: any) => pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <Icon type={IconType.Ionicons} name={icon} size={size} color={color} />
            </View>
        </Pressable>
    )
}

export default IconButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.75
    }
})