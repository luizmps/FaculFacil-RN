import { StyleSheet } from 'react-native';
import { theme } from '../../global/style/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
        zIndex: 3, // works on ios
        elevation: 3, // works on android
    },
    modalBody: {
        height: 150,
        width: '100%',
        alignItems: 'center',
    },
    modalHeader: {
        fontSize: 18,
        color: theme.colors.textColor,
        fontFamily: theme.fonts.text700bold,
        marginTop: 20,
    },
    modalContent: {
        flexDirection: 'row',
        marginTop: 20,
    },
    exitButton: {
        height: 50,
        width: 150,
        borderRadius: 8,
        backgroundColor: theme.colors.primaryButton,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    stayButton: {
        height: 50,
        width: 150,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#1D2766",
        borderWidth: 2,
    }
})