import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
import { theme } from '../../global/style/theme';

export function Contacts() {

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
          <Text style={styles.headerText}>Contatos</Text>
        </View>
      </LinearGradient>

      <ScrollView>
        <View style={styles.body}>

        </View>
      </ScrollView>
    </View>
  )
}