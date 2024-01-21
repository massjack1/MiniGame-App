import {Text, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

function InstructionText({children, style}) {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,

    },
})