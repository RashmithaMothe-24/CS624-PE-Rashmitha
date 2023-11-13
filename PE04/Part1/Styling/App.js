import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image
                            style={styles.cardImage}
                            source={require('./assets/user.png')}
                        />
                    </View>
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.userName}>John Doe</Text>
                        <Text style={styles.userOccupation}>
                            <Text style={styles.underlineText}>Software Developer</Text>
                        </Text>
                        <Text style={styles.userDescription}>
                            A passionate developer creating amazing mobile applications.
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400,
    },
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 15,
    },
    cardImage: {
        width: 80,
        height: 80,
    },
    userInfoContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'white',
    },
    userOccupation: {
        fontSize: 18,
        marginTop: 5,
        color: 'white',
    },
    userDescription: {
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
        color: 'white',
    },
    underlineText: {
        textDecorationLine: 'underline',
    },
});
