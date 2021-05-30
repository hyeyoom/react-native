import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Header = () => {
    return (
        <View style={[styles.container, styles.header]}>
            <Text style={styles.text}>Header</Text>
        </View>
    )
}

export const Contents = () => {
    return (
        <View style={[styles.container, styles.contents]}>
            <Text style={styles.text}>Contents</Text>
        </View>
    )
}

export const Footer = () => {
    return (
        <View style={[styles.container, styles.footer]}>
            <Text style={styles.text}>Header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
    },
    header: {
        flex: 1,
        backgroundColor: '#f1c40f',
    },
    contents: {
        flex: 2,
        backgroundColor: '#1abc9c',
        height: 640,
    },
    footer: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    text: {
        fontSize: 26,
    }
})