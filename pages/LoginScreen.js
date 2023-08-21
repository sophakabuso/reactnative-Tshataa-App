
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable, Alert } from 'react-native';
import * as yup from 'yup';

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
    });

    const handleSubmit = async () => {
        try {
            await schema.validate({ email, password });
            console.log('Validation successful');
            Alert.alert('Form submission', 'Form is valid.', [
                { text: 'OK', onPress: () => console.log('OK pressed') }
            ]);
        } catch (error) {
            console.log('Validation error:', error);
            Alert.alert('Form error', 'Form has errors.', [
                { text: 'OK', onPress: () => console.log('OK pressed') }
            ]);
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.appName}>Tshatha</Text>
            </View>
            <View style={styles.container2}>
                <View style={styles.container2a}>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Email" 
                            onChangeText={text => setEmail(text)} />
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Password" 
                            secureTextEntry={true} 
                            onChangeText={text => setPassword(text)} /> 
                    </View>
                    <View style={styles.actionContainer}>
                        <Pressable style={styles.actionButton} onPress={handleSubmit}>
                            <Text style={styles.signIn}>Sign In</Text>
                        </Pressable>
                        <View style={styles.signUpOpt}>
                            <Text style={styles.noAccText}>No Account?</Text>
                            <Text style={styles.signUpText} onPress={()=>navigation.navigate('Register')}>Sign Up</Text>
                        </View>
                        <View style={styles.forgotPasswordCont}>
                            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingVertical: 80,
        alignItems: 'center',
        backgroundColor: '#26394D',
    },
    container1: {
        flex: 1.2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    appName: {
        fontFamily: 'berkshire',
        fontSize: 54,
        color: 'gold',
    },
    container2: {
        flex: 2.8,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2a: {
        height: 320,
        width: 320,
        backgroundColor: '#FFF',
        borderRadius: 25,
        padding: 20,
    },
    inputContainer: {
        height: 140,
    },
    actionContainer: {
        height: 140,
        top: 20
    },
    textInput: {
        borderRadius: 15,
        height: 46,
        borderColor: '#007AFF',
        borderWidth: 1,
        marginVertical: 10,
        padding: 10,
    },
    actionButton: {
        backgroundColor: '#007AFF',
        borderRadius: 15,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    signUpOpt: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    noAccText: {
        fontSize: 16,
    },
    signIn: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        padding: 10
    },
    signUpText: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10
    },
    forgotPasswordCont: {
        alignItems: 'center'
    },
    forgotPasswordText: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
