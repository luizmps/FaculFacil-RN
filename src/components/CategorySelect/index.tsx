import React from 'react';
import { ScrollView } from 'react-native';

import { styles } from './style';
import { categories } from '../../utils/categories';

import { Category } from '../Category';

export function CategorySelect() {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map((category) => (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
          />
        ))
      }
    </ScrollView>
  )
}