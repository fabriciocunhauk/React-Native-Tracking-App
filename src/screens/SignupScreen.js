import React, { useState } from 'react';
import { View, StyleSheet, } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Trackers</Text>
            </Spacer>
            <Input
                label="Email"
                autoCapitalize="none"
                autoCorrect={false}
                onChange={setEmail}
            />
            <Spacer />
            <Input
                label="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                onChange={setPassword}
            />
            <Spacer>
                <Button
                    title="Sign In"
                    onPress={() => navigation.navigate('signin')}
                />
            </Spacer>
        </View>
    )
};

SignupScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fddb3a',
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 200
    }
});

export default SignupScreen;