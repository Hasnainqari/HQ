import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screen/login";
import OnboardingScreen from "./screen/onboarding";
import {useState} from 'react';
const Stack = createNativeStackNavigator();


const App = () => {
    const [Launch, setLaunch] = useState('');
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
}


export default App;