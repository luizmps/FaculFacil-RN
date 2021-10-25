import { StyleSheet } from 'react-native';

import { theme } from '../../global/style/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
    color: '#FFFF',
    padding: 2,
  },
  body: {
    marginLeft: 10,
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    marginRight: 20,
  },
  bodyHeader: {
    fontFamily: theme.fonts.text700bold,
    fontSize: 19,
    color: '#FFFF',
    marginTop: 2,
    marginBottom: 2,
  },
  bodyText: {
    fontFamily: theme.fonts.text700bold,
    color: '#FFFF',
    fontSize: 19,
    marginTop: 2,
    marginBottom: 10,
    textAlign: 'center'
  },
});