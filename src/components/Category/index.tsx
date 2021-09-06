import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './style';
import { theme } from '../../global/style/theme';

type Props = RectButtonProps & {
  title: string;
  icon: ImageSourcePropType;
  checked?: boolean;
}

export function Category({
  title,
  icon,
}: Props) {

  return (
    <RectButton
      style={styles.container}
    >
      <View style={styles.content}>
        <Image
          source={icon}
          style={{ width: 48, height: 48 }}
        />

        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </RectButton>
  )
}