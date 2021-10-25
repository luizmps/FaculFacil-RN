import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, Image, Text } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './style';

type ProfileProps = {
  onPress?: any;
}

export function Profile({ onPress }: ProfileProps) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>

        <Image
          source={{ uri: "https://avatars.githubusercontent.com/u/25032049?v=4" }}
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

      <RectButton
        style={styles.logoutBtn}
        onPress={onPress}
      >
        <MaterialIcons name="logout" size={24} color="white" />
      </RectButton>
    </View>

  )
}