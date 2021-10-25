import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../global/style/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBackground: {
    backgroundColor: '#1D2766',
  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 15,
  },
  buttonBack: {
    left: 0,
    width: 50,
    height: 50,
    marginLeft: 14,
    position: 'absolute',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.textColor,
    fontSize: 20,
  },
  body: {
    flex: 1,
  },
});