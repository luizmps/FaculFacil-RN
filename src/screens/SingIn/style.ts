import { StyleSheet } from 'react-native';

import { theme } from '../../global/style/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  formContent: {
    width: 274,
    marginTop: -40
  },
  input: {
    height: 56,
    backgroundColor: theme.colors.secondary,
    textAlign: 'center',
    borderRadius: 8,
    padding: 10,
    color: theme.colors.textColor,
    marginTop: 27,
    fontSize: 15,
    fontFamily: theme.fonts.text400,
  },
  buttonContainer: {
    width: 274,
    height: 56,
    backgroundColor: theme.colors.primaryButton,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 70
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderColor: '#991F36'
  },
  buttonText: {
    flex: 1,
    color: theme.colors.textColor,
    fontSize: 15,
    fontFamily: theme.fonts.text400,
    textAlign: 'center'
  },
  margin: {
    flex: 1,
    marginTop: 140,
    alignItems: 'center',
    justifyContent: 'center',
  }
})