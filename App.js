import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screen/login";
import OnboardingScreen from "./screen/onboarding";
import { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";


const Stack = createNativeStackNavigator();

const App = () => {
    const [Launch, setLaunch] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setLaunch(true);
            }
            else {
                setLaunch(false);
            }
        });
    }, [])

    if (Launch == null) {
        return null;
    } else if (Launch == true) {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    headerMode='none'
                >
                    <Stack.Screen name='onboarding' component={OnboardingScreen} />
                    <Stack.Screen name='login' component={LoginScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    } else {
        <LoginScreen />
    }

}
export default App;