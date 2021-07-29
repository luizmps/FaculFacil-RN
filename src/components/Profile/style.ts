import { StyleSheet } from 'react-native';

import { theme } from '../../global/style/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
    fontFamily: theme.fonts.text500,
    fontSize: 24,
    color: theme.colors.textColor,
    marginRight: 5
  },
  username: {
    fontFamily: theme.fonts.text700bold,
    fontSize: 24,
    color: theme.colors.textColor
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.textColorOpac
  }
});