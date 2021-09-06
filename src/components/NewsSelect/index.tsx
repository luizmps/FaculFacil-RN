import React from 'react';
import { FlatList, Text, View, Image } from 'react-native';

import { styles } from './style';
import { news } from '../../utils/news';

import { News } from '../News';

export function NewsSelect() {
  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <News
            icon={item.icon}
            title={item.title}
            key={item.id}
            description={item.description}
            data={item.data}
          />
        }
      />
    </View>

  )
}