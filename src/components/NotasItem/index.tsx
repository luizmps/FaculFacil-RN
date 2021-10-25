import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, Image, Text } from 'react-native';

import { styles } from './style';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  disciplina: string
  notaa1: string;
  notaa2: string;
  media: string;
}

export function NotasItem({ disciplina, notaa1, notaa2, media }: Props) {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.cardBackground}
        colors={['#1D2766', '#171F52']}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.headerText}>{disciplina}</Text>
        </View>

        <View style={styles.body}>

          <View style={{ flexDirection: 'row' }}>
            <View style={styles.card}>
              <Text style={styles.bodyHeader}>Nota A1</Text>
              <Text style={styles.bodyText}>{notaa1}</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.bodyHeader}>Nota A2</Text>
              <Text style={styles.bodyText}>{notaa2}</Text>
            </View>
          </View>



          <View style={styles.card}>
            <Text style={styles.bodyHeader}>Media</Text>
            <Text style={styles.bodyText}>{media}</Text>
          </View>

        </View>


      </LinearGradient>
    </View>

  )
}