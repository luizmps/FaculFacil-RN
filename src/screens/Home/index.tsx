import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { Profile } from '../../components/Profile';
import { CategorySelect } from '../../components/CategorySelect';

import { styles } from './style';
import { NewsSelect } from '../../components/NewsSelect';
import { LogoutModal } from '../../components/LogoutModal';

export function Home() {

  const [isOpened, setIsOpened] = useState(false);

  return (
    <View style={styles.container}>
      {isOpened &&
        <LogoutModal
          onPressClose={() => setIsOpened(!isOpened)}
        />
      }

      <View style={styles.header}>
        <Profile
          onPress={() => setIsOpened(!isOpened)}
        />
      </View>

      <CategorySelect />
      <View style={styles.content}>
        <Text style={styles.headerContent}>Noticias e Eventos</Text>
        <NewsSelect />
      </View>
    </View>
  )
}