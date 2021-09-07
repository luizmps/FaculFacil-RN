import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../global/style/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerBackground: {
        backgroundColor: '#1D2766',
        marginBottom: 32,
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 15
    },
    buttonBack: {
        width: 40,
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
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    schoolCardBackgroundBorder: {
        width: 343,
        height: 280,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    schoolCardBackground: {
        width: 340,
        height: 277,
        borderRadius: 8,
    },
    headerLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    headerLogoLeft: {
        fontSize: 24,
        fontFamily: theme.fonts.text700bold,
        color: theme.colors.textColor,
    },
    headerLogoRight: {
        color: theme.colors.primaryButton
    },
    bodySchoolCard: {
        flexDirection: 'row',
    },
    cardPicture: {
        backgroundColor: '#fff',
        width: 98,
        height: 102,
        borderRadius: 8,
        marginLeft: 18,
        marginTop: 45,
    },
    informations: {
        marginLeft: 20,
    },
    infoTitles: {
        fontSize: 14,
        fontFamily: theme.fonts.text700bold,
        color: theme.colors.primaryButton,
        marginBottom: -5
    },
    infoContent: {
        fontSize: 14,
        fontFamily: theme.fonts.text700bold,
        color: theme.colors.textColor,
    }
});