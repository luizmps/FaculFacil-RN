import React from 'react';
import { View, Image, TextInput, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import LogoImg from '../../assets/Logo.png';
import Login from '../../assets/Icons/Login.png';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

export function SingIn() {
  const navigation = useNavigation();

  function handleSingIn() {
    navigation.navigate('Home');
  }

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

        <RectButton
          style={styles.buttonContainer}
          onPress={handleSingIn}
        >
          <Text style={styles.buttonText}>
            Entrar
          </Text>
          <View style={styles.iconWrapper}>
            <Image source={Login} />
          </View>
        </RectButton>

      </View>
    </View>
  );
}