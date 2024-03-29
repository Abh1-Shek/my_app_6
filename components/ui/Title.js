import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors';

function Title({children, style}) {
    return <Text style={[styles.title, style]}>{children}</Text>
};


export default Title;


const styles = StyleSheet.create({  
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        // fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        padding: 12,
        borderWidth: 2,
        borderColor: Colors.accent500,
    },
});