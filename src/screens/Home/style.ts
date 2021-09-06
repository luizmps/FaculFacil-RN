import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../global/style/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 32,
  },
  content: {
    flex: 1,
    paddingLeft: 24,
    marginTop: 24,
  },
  headerContent: {
    fontFamily: theme.fonts.text500,
    fontSize: 18,
    color: theme.colors.textColor,
  }
});