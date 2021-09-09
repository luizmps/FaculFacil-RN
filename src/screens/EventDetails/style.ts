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
    bodyImage: {
        width: '100%',
        height: 234,
    },
    content: {
        flex: 1,
        padding: 25,
    },
    contentHeader: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
    },
    imageWrapper: {
        borderRadius: 30,
        borderColor: "#1D2766",
        borderWidth: 2,
    },
    contentHeaderImage: {
        height: 50,
        width: 50,
        borderRadius: 30,
    },
    autorName: {
        fontSize: 14,
        fontFamily: theme.fonts.text700bold,
        marginLeft: 10,
        color: theme.colors.textColor,
    },
    postDays: {
        fontSize: 14,
        fontFamily: theme.fonts.text700bold,
        color: theme.colors.textColorOpac,
    },
    contentBody: {

    },
    eventTitle: {
        fontSize: 20,
        fontFamily: theme.fonts.text700bold,
        color: theme.colors.textColor,
    },
    eventBody: {
        fontSize: 15,
        fontFamily: theme.fonts.text500,
        color: theme.colors.textColor,
    }
})