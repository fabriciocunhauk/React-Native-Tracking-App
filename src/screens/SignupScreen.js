import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
    return <>
        <Text style={{ fontSize: 48 }}>Signup screen</Text>
        <Button
            title="Go to Signin"
            onPress={() => navigation.navigate('signin')}
        />
        <Button
            title="Go to main flow"
            onPress={() => navigation.navigate('mainFlow')}
        />
    </>
}

const styles = StyleSheet.create({

});

export default SignupScreen;