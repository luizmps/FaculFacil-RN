import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
import { theme } from '../../global/style/theme';

import { NotasItem } from '../../components/NotasItem';

import { notas } from '../../utils/notas';

export function Notas() {

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
          <Text style={styles.headerText}>Notas</Text>
        </View>
      </LinearGradient>

      <ScrollView>
        <View style={styles.body}>
          {
            notas.map((item) => (
              <NotasItem
                key={item.id}
                disciplina={item.disciplina}
                notaa1={item.notaa1}
                notaa2={item.notaa2}
                media={item.media}
              />
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}