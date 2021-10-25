import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, Image, Text } from 'react-native';

import { styles } from './style';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  diaSemana: string
  horario: string;
  disciplina: string;
  professor: string;
}

export function ScheduleItem({ diaSemana, horario, disciplina, professor }: Props) {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.cardBackground}
        colors={['#1D2766', '#171F52']}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.headerText}>{diaSemana}</Text>
        </View>

        <View style={styles.bodyCard}>
          <Text style={styles.bodyHeader}>Horario:</Text>
          <View style={styles.bodyContent}>
            <Text style={styles.bodyText}>{horario}</Text>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.bodyCard}>
          <Text style={styles.bodyHeader}>Disciplina:</Text>
          <View style={styles.bodyContent}>
            <Text style={styles.bodyText}>{disciplina}</Text>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.bodyCard}>
          <Text style={styles.bodyHeader}>Professor:</Text>
          <View style={styles.bodyContent}>
            <Text style={styles.bodyText}>{professor}</Text>
          </View>
        </View>

      </LinearGradient>
    </View>

  )
}