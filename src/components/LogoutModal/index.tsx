import React, { useState } from 'react';
import { View, Text } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './style';
import { theme } from '../../global/style/theme';

type ModalProps = {
    onPressClose?: any;
    onPressExit?: any;
}

export function LogoutModal({ onPressExit, onPressClose }: ModalProps) {
    const { primary } = theme.colors;

    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.modalBody}
                colors={[primary, '#0A1033']}
            >
                <Text style={styles.modalHeader}>
                    Deseja sair do FaculFacil?
                </Text>
                <View style={styles.modalContent}>
                    <RectButton onPress={onPressClose}>
                        <View style={styles.stayButton}>
                            <Text style={{ color: '#FFF' }}>Não</Text>
                        </View>
                    </RectButton>
                    <RectButton style={styles.exitButton}>
                        <Text style={{ color: '#FFF' }}>Sim</Text>
                    </RectButton>
                </View>
            </LinearGradient>
        </View>
    )
}