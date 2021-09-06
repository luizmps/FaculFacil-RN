import { StyleSheet } from 'react-native';
import { theme } from '../../global/style/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  portainer: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: "#1D2766",
    borderWidth: 2,
  },
  title: {
    fontFamily: theme.fonts.text700bold,
    color: theme.colors.textColor,
    fontSize: 17,
    letterSpacing: 0.6,
    marginLeft: 10
  },
  textBody: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.textColor,
    fontSize: 15,
    marginLeft: 10
  },
  readMore: {
    fontFamily: theme.fonts.text700bold,
    color: theme.colors.textColorOpac,
    fontSize: 15,
    marginLeft: 10
  }
});