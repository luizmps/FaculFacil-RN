import React from 'react';
import { Text, View, Image, ImageSourcePropType } from 'react-native';

import { styles } from './style';

type Props = {
  title: string;
  icon: ImageSourcePropType;
  description: string;
  data?: string;
}

export function News({ title, icon, description, data }: Props) {

  function showReadMore(string: any) {
    const description = string;
    if (description.length > 18) {
      const data = description.substr(0, 20)
      return (
        <Text style={styles.textBody}>
          {data + ' - '}
          <Text style={styles.readMore}>
            {"Ler Mais ..."}
          </Text>
        </Text>
      )
    } else {
      return (
        <Text style={styles.textBody}>
          {description}
        </Text>
      )
    }
  }

  return (
    <View >
      <View style={styles.container}>
        <View style={styles.portainer}>
          <Image
            source={icon}
            style={{ width: 40, height: 40 }}
          />
        </View>

        <View>
          <Text style={styles.title}>
            {title}
          </Text>

          {showReadMore(description)}

        </View>

      </View>
    </View >
  )
}