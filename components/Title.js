import {StyleSheet, Text} from "react-native";

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
        color: '#8B51D8',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#8B51D8',
        padding: 12,
        borderRadius: 8,
    }
});