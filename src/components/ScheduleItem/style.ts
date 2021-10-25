import { StyleSheet } from 'react-native';

import { theme } from '../../global/style/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardBackground: {
    width: '95%',
    marginTop: 30,
    borderBottomRightRadius: 8,
  },
  cardHeader: {
    backgroundColor: theme.colors.primaryButton,
    borderTopRightRadius: 8,
    alignItems: 'center',
  },
  headerText: {
    fontFamily: theme.fonts.text700bold,
    fontSize: 19,
    color: '#FFFF',
    padding: 2,
  },
  bodyCard: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 3,
    alignItems: 'center',
  },
  bodyHeader: {
    fontFamily: theme.fonts.text700bold,
    fontSize: 19,
    color: '#FFFF',
    marginTop: 2,
    marginBottom: 2,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyText: {
    fontFamily: theme.fonts.text500,
    color: '#FFFF',
    textAlign: 'center',
    marginTop: 2,
    marginBottom: 2,
  },
  separator: {
    borderBottomColor: theme.colors.primaryButton,
    borderBottomWidth: 1,
  }
});