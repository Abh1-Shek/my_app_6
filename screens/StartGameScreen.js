import { TextInput, View, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react'
import Colors from '../constants/colors';


function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }
    function resetInputHandler() {
        setEnteredNumber('');
    }


    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!',
                        'Number has to be a number between 1 and 99.',
                        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }
        onPickNumber(enteredNumber);
    }

    return (
        <View style = {styles.inputContainer}>
            <TextInput 
                style = {styles.numberInput} 
                maxLength = {2}
                keyboardType = 'number-pad'
                autoCorrect = {false}
                value = {enteredNumber}
                onChangeText = {numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
    );
};



export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row'
    }
});