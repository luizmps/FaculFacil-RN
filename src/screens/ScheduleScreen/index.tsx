import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
import { theme } from '../../global/style/theme';
import { ScheduleItem } from '../../components/ScheduleItem';

import { schedule } from '../../utils/schedule';

export function ScheduleScreen() {

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
          <Text style={styles.headerText}>Grade</Text>
        </View>
      </LinearGradient>

      <ScrollView>
        <View style={styles.body}>
          {
            schedule.map((item) => (
              <ScheduleItem
                key={item.id}
                diaSemana={item.diaSemana}
                disciplina={item.disciplina}
                horario={item.horario}
                professor={item.professor}
              />
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}