import React from "react";
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native/';
import Onboarding from 'react-native-onboarding-swiper';


const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{
            marginHorizontal: 18
        }}
        {...props}
    >

        <Text
            style={{
                color: '#ddd',
                fontSize: 16
            }}>
            Done
        </Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            DoneButtonComponent={Done}
            onSkip={() => navigation.replace("login")}
            onDone={() => navigation.navigate("login")}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image style={{ width: 100, height: 100 }} source={require('../assest/Images/img1.webp')} />,
                    title: 'Onboarding Screen 1',
                    subtitle: 'Welcome To HQ App This App is Mind Blowing App',
                },
                {
                    backgroundColor: '#fdeb39',
                    image: <Image style={{ width: 100, height: 100 }} source={require('../assest/Images/img2.png')} />,
                    title: 'Onboarding Screen 2',
                    subtitle: 'You can See this App new things',
                },
                {
                    backgroundColor: '#5e349d',
                    image: <Image style={{ width: 100, height: 100 }} source={require('../assest/Images/img1.webp')} />,
                    title: 'Onboarding Screen 3',
                    subtitle: 'Welcome To HQ App This App is Mind Blowing App',
                },
            ]}
        />
    );
}

export default OnboardingScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})