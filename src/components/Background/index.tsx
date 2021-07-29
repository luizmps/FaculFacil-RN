import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './style';
import { theme } from '../../global/style/theme';

type Props = {
  children: ReactNode;
}

export function Background({ children }: Props) {
  const { primary } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[primary, '#0A1033']}
    >
      {children}
    </LinearGradient>
  )
}