import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './style';

type Props = RectButtonProps & {
  title: string;
  icon: ImageSourcePropType;
  checked?: boolean;
}

export function Category({
  title,
  icon,
}: Props) {

  const navigation = useNavigation();

  function handleCategory() {
    navigation.navigate(title);
  }

  return (
    <RectButton
      style={styles.container}
      onPress={handleCategory}
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