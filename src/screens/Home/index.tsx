import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { Profile } from '../../components/Profile';
import { CategorySelect } from '../../components/CategorySelect';

import { styles } from './style';
import { NewsSelect } from '../../components/NewsSelect';

export function Home() {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
      </View>

      <CategorySelect />
      <View style={styles.content}>
        <Text style={styles.headerContent}>Noticias e Eventos</Text>
        <NewsSelect />
      </View>

    </View>
  )
}