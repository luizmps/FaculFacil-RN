import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
import { news } from '../../utils/news';

import { News } from '../News';

export function NewsSelect() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => {
              navigation.navigate('Events', {
                value: item,
              })
            }}>
              <News
                key={item.id}
                type={item.type}
                title={item.title}
                icon={item.icon}
                description={item.description}
                date={item.data}
              />
            </TouchableOpacity >
          )
        }}
      />
    </View>

  )
}