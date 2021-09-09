import React from 'react';
import { Text, View, Image, ImageSourcePropType } from 'react-native';

import DateIcon from '../../assets/Icons/Date.svg';

import { styles } from './style';

type Props = {
  type: string
  title: string;
  icon: ImageSourcePropType;
  description: string;
  date?: string;
}

export function News({ type, title, icon, description, date }: Props) {

  function showReadMore(description: any) {
    const descriptionText = description;
    if (descriptionText.length > 18) {
      const data = descriptionText.substr(0, 20)
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
          {descriptionText}
        </Text>
      )
    }
  }

  function showDateEvent(date: string | undefined) {
    return (
      <View style={{ flexDirection: 'row', marginLeft: 10, alignItems: 'center' }}>
        <DateIcon style={{ marginBottom: 4 }} />
        <Text style={styles.textBody}>
          {date}
        </Text>
      </View>
    )
  }

  return (
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
        {type == 'Date' ?
          showDateEvent(date)
          :
          showReadMore(description)
        }
      </View>
    </View>
  )
}