import React from 'react';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';

import LogoImg from '../../assets/Logo.png';
import Login from '../../assets/Icons/Login.png';
import { styles } from './style';

export function SingIn() {
  return (
    <View style={styles.container}>
      <View style={styles.margin}>

        <Image
          source={LogoImg}
        />

        <View style={styles.formContent}>
          <TextInput
            placeholder="E-mail Institucional"
            placeholderTextColor="#DDE3F0"
            style={styles.input}
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#DDE3F0"
            secureTextEntry={true}
            style={styles.input}
          />
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>
            Entrar
          </Text>
          <View style={styles.iconWrapper}>
            <Image source={Login} />
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
}