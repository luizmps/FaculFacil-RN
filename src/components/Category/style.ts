import { StyleSheet } from 'react-native';
import { theme } from '../../global/style/theme';

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    backgroundColor: '#1D2766',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15
  },
  title: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.textColor,
    fontSize: 15
  },

});