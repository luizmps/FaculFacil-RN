import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './style';

export function Profile() {
  return (
    <View style={styles.container}>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Ola,
          </Text>

          <Text style={styles.username}>
            Luiz
          </Text>
        </View>

        <Text style={styles.message}>
          Bom dia e bons estudos
        </Text>
      </View>

    </View>
  )
}