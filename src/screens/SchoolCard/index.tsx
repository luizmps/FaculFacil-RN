import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
import { theme } from '../../global/style/theme';

export function SchoolCard() {

  const navigation = useNavigation();

  function returnHome() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.headerBackground}
        colors={['#171F52', '#1D2766']}
      >
        <View style={styles.header}>
          <RectButton
            style={styles.buttonBack}
            onPress={returnHome}
          >
            <Ionicons name="arrow-back" size={24} color={theme.colors.textColor} />
          </RectButton>
          <Text style={styles.headerText}>Carteirinha</Text>
        </View>
      </LinearGradient>

      <View style={styles.body}>
        <LinearGradient
          colors={['#1B2565', '#243189']}
          style={styles.schoolCardBackgroundBorder}
        >
          <LinearGradient
            colors={['#171F52', '#1D2766']}
            style={styles.schoolCardBackground}
          >
            <View style={styles.headerLogo}>
              <Text style={styles.headerLogoLeft}>
                Facul
                <Text style={styles.headerLogoRight}>
                  Facil
                </Text>
              </Text>
            </View>
            <View style={styles.bodySchoolCard}>
              <Image
                source={{ uri: "https://github.com/luizmps.png" }}
                style={styles.cardPicture}
              />
              <View style={styles.informations}>
                <Text style={styles.infoTitles}>Nome:</Text>
                <Text style={styles.infoContent}>Luiz Adolfo Martins Paiva</Text>
                <Text style={styles.infoTitles}>Curso:</Text>
                <Text style={styles.infoContent}>Sistemas de Informacao</Text>
                <Text style={styles.infoTitles}>Registro de Aluno:</Text>
                <Text style={styles.infoContent}>2310189</Text>
                <Text style={styles.infoTitles}>RG:</Text>
                <Text style={styles.infoContent}>XX.XXX.XXX-X</Text>
                <Text style={styles.infoTitles}>Validade:</Text>
                <Text style={styles.infoContent}>12/2023</Text>
              </View>
            </View>

          </LinearGradient>
        </LinearGradient>
      </View>


    </View >
  )
}