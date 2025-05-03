import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [signIn, setSigIn] = useState(false)
    //   const { signIn } = useContext(AuthContext);

    const handleLogin = async () => {
        setError('');
        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        try {
            await signIn(email, password);
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return (
        <LinearGradient
            colors={['#ffffff', '#e6f4ff']}
            style={styles.container}
        >
            <StatusBar style="light" />
            <SafeAreaView style={styles.innerContainer}>
                {/* <Image
          source={require('../assets/medical-icon.png')}
          style={styles.logo}
        /> */}

                <Text style={styles.title}>Welcome to iHelath</Text>

                {error ? <Text style={styles.errorText}>{error}</Text> : null}

                <TextInput
                    label="Email"
                    mode="outlined"
                    left={<TextInput.Icon icon="email" />}
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    theme={{ colors: { primary: '#2196F3' } }}
                />

                <TextInput
                    label="Password"
                    mode="outlined"
                    left={<TextInput.Icon icon="lock" />}
                    right={<TextInput.Icon
                        icon={showPassword ? "eye-off" : "eye"}
                        onPress={() => setShowPassword(!showPassword)}
                    />}
                    style={styles.input}
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                    theme={{ colors: { primary: '#2196F3' } }}
                />

                <TouchableOpacity
                    style={styles.forgotPassword}
                    onPress={() => navigation.navigate('ForgotPassword')}
                >
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

                <Button
                    mode="contained"
                    style={styles.loginButton}
                    labelStyle={styles.buttonLabel}
                    onPress={() => router.push("home")}
                    // onPress={handleLogin}
                >
                    Login
                </Button>

                <View style={styles.socialLoginContainer}>
                    <Text style={styles.socialLoginText}>Or continue with</Text>
                    <View style={styles.socialButtons}>
                        <Button
                            mode="outlined"
                            style={styles.socialButton}
                            icon="google"
                            onPress={() => { }}
                        />
                        <Button
                            mode="outlined"
                            style={styles.socialButton}
                            icon="apple"
                            onPress={() => { }}
                        />
                        <Button
                            mode="outlined"
                            style={styles.socialButton}
                            icon="facebook"
                            onPress={() => { }}
                        />
                    </View>
                </View>

                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.signupLink}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent:"center",
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 30,
        marginTop: 50,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1a237e',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#616161',
        marginBottom: 40,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        marginBottom: 15,
        backgroundColor: 'white',
    },
    loginButton: {
        width: '100%',
        marginTop: 20,
        paddingVertical: 5,
        backgroundColor: '#2196F3',
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        height: 40,
        lineHeight: 40,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginTop: -5,
    },
    forgotPasswordText: {
        color: '#2196F3',
        fontSize: 14,
    },
    errorText: {
        color: 'red',
        marginBottom: 15,
        textAlign: 'center',
    },
    socialLoginContainer: {
        marginTop: 40,
        width: '100%',
        alignItems: 'center',
    },
    socialLoginText: {
        color: '#616161',
        marginBottom: 15,
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    socialButton: {
        flex: 1,
        marginHorizontal: 5,
        borderColor: '#2196F3',
    },
    signupContainer: {
        flexDirection: 'row',
        marginTop: 30,
    },
    signupText: {
        color: '#616161',
    },
    signupLink: {
        color: '#2196F3',
        fontWeight: 'bold',
    },
});

export default LoginScreen;