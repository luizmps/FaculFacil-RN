import React, { useState } from 'react';
import { View, Text, Image, ScrollView, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';

import backgound from '../../assets/Background.png';
import { styles } from './style';
import { theme } from '../../global/style/theme';

const source = {
    html: `
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper id, consequat litora ut mi feugiat volutpat quisque facilisi. Ornare tristique etiam ultricies netus felis sem convallis adipiscing, feugiat nibh potenti sociosqu eros quisque venenatis, nisl elementum lorem dictum maecenas fusce tortor. Mi senectus sagittis euismod porta neque massa habitasse risus volutpat, sem interdum accumsan sit cubilia pulvinar libero curae adipiscing, habitant enim egestas tristique urna suscipit rhoncus donec. Mollis proin porttitor quis torquent sit suspendisse eros, quisque faucibus tincidunt velit rhoncus morbi dapibus, parturient purus interdum feugiat amet fermentum.</p>

    <p>Taciti dictumst volutpat eros facilisi ultrices dolor etiam maximus condimentum natoque justo imperdiet hac cubilia, neque integer lectus mollis sollicitudin amet mauris venenatis accumsan nisl quam fames potenti. Ipsum eu magnis tempus sem vehicula sit gravida et, metus facilisi mi semper nascetur odio ornare phasellus vivamus, curae vitae nisi auctor finibus erat lobortis. Taciti bibendum fusce suscipit tristique cursus parturient est, hac tincidunt risus faucibus vehicula quis ligula nam, aliquet netus lacus conubia imperdiet eleifend. Nullam fames sagittis massa tincidunt aptent nisl, taciti nulla tempor ridiculus volutpat, fermentum justo accumsan sodales magnis. Himenaeos euismod integer conubia elit pellentesque interdum at, taciti tristique varius venenatis cubilia torquent rutrum, consectetur dapibus mauris est lectus ac. Odio erat ridiculus mauris mollis vehicula per penatibus cursus rutrum suspendisse aptent at potenti, porta eleifend facilisi nostra pretium semper suscipit neque pharetra metus venenatis viverra. Commodo vulputate rutrum leo consectetur finibus quisque dictumst cursus sociosqu, habitant aenean lacus sed volutpat proin tempor congue nibh euismod, ex sagittis elit litora ultrices cras accumsan penatibus.</p>
    `
};

export function EventDetails({ route }: any) {

    const { width } = useWindowDimensions();
    const navigation = useNavigation();
    const { value } = route.params;

    function returnHome() {
        navigation.navigate("Home");
    }

    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.headerBackground}
                colors={['#171F52', '#1D2766']}
            >
                <View style={styles.header}>
                    <RectButton
                        style={styles.buttonBack}
                        onPress={returnHome}
                    >
                        <Ionicons name="arrow-back" size={24} color={theme.colors.textColor} />
                    </RectButton>
                    <Text style={styles.headerText}>Detalhes</Text>
                    <RectButton
                        style={styles.shareButton}
                        onPress={returnHome}
                    >
                        <FontAwesome5 name="share-alt" size={24} color={theme.colors.primaryButton} />
                    </RectButton>
                </View>
            </LinearGradient>
            <ScrollView>
                <View style={styles.body}>
                    <Image
                        style={styles.bodyImage}
                        source={backgound}
                    />
                    <View style={styles.content}>
                        <View style={styles.contentHeader}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={styles.imageWrapper}>
                                    <Image
                                        style={styles.contentHeaderImage}
                                        source={{ uri: "https://github.com/luizmps.png" }} />
                                </View>
                                <Text style={styles.autorName}>Luiz Adolfo</Text>
                            </View>
                            <Text style={styles.postDays}>1 dia atrás</Text>
                        </View>
                        <View style={styles.contentBody}>
                            <Text style={styles.eventTitle}>{value.title}</Text>
                            <RenderHtml
                                contentWidth={width}
                                source={source}
                                tagsStyles={{
                                    p: styles.eventBody,
                                }}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

