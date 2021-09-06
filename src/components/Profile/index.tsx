import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, Image, Text } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './style';

export function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>

        <Image
          source={{ uri: "https://github.com/luizmps.png" }}
          style={styles.avatar}
        />

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

      <RectButton style={styles.logoutBtn}>
        <MaterialIcons name="logout" size={24} color="white" />
      </RectButton>
    </View>

  )
}