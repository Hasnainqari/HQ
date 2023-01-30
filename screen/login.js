import React from "react";
import { Alert, Button, StyleSheet, Text, View } from 'react-native/';


const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                LoginScreen
            </Text>
            <Button
                title="click Now"
                onPress={() => alert('button CLicked!!!')}
            />
        </View>
    );
}

export default LoginScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})