import React, { useState, useEffect } from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, Image, Platform, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [techs, setTechs] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => { //se encontrar um usuario, ele colocara na variavel 'user', se já estiver logado, será direcionado para 'List'
            if (user) {
                navigation.navigate('List');
            }
        })
    }, [])

    async function handleSubmit() {
        const response = await api.post('/sessions', {
            email
        })

        const { _id } = response.data;

        await AsyncStorage.setItem('user', _id); //salva os dados, wait para esperar terminar
        await AsyncStorage.setItem('techs', techs);

        navigation.navigate('List'); //navegação e direciona para List
    }


    return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image source={logo} />

        <View style={styles.form}>
            <Text style={styles.label}>Seu email *</Text>
            <TextInput 
                style={styles.input}
                placeholder="Seu e-mail"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
            />

        <Text style={styles.label}>Tecnologias *</Text>
            <TextInput 
                style={styles.input}
                placeholder="Tecnologias de interesse"
                placeholderTextColor="#999"               
                autoCapitalize="words"
                autoCorrect={false}
                value={techs}
                onChangeText={setTechs}
            />

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>
                    Encontrar Spots
                </Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //ocupa toda a tela
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        alignSelf: 'stretch', //ocupa a largura máxima
        paddingHorizontal: 30, //padding nas laterais
        marginTop: 30,
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
});