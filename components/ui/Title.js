import {StyleSheet, Text} from "react-native";
import Colors from "../../constants/colors";

function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary500,
        textAlign: 'center',
        borderColor: Colors.primary500,
        padding: 12,
        borderRadius: 8,
    }
});