import { View, Image, Text, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';


function GameOverScreen() {
    return <View style = {styles.rootContainer}>
        <Title style = {styles.addMargin}>GAME OVER!</Title>
        <View style = {styles.imageContainer}>
            <Image source = {require('../assets/images/success.png')}/>
        </View>
        <Text style = {styles.summaryText}>Your phone needed <Text style = {styles.highlight}>X</Text> rounds to guess the number{' '}<Text style = {styles.highlight}>Y</Text>.</Text>
        <PrimaryButton>Start New Game</PrimaryButton>
    </View>
};

export default GameOverScreen;

const styles = StyleSheet.create({
    addMargin: {
        marginTop: 22,
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    },
});