import { StyleSheet } from 'react-native';

import { theme } from '../../global/style/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
    fontFamily: theme.fonts.text500,
    fontSize: 20,
    color: theme.colors.textColor,
    marginRight: 5
  },
  username: {
    fontFamily: theme.fonts.text700bold,
    fontSize: 20,
    color: theme.colors.textColor
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.textColorOpac
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 18
  },
  logoutBtn: {
    width: 54,
    height: 54,
    backgroundColor: theme.colors.primaryButton,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: 56,
    height: 56
  },
});