import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Icon } from 'react-native-elements'
export function Nav() {

    return (
        <View style={styles.container}>
            <Icon iconStyle={styles.icons} name='search'/>
            <Text style={styles.heading}>How-To</Text>
            <Icon iconStyle={styles.icons} name='menu'/>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        color: '#f1f9f9',
        fontSize: 28,
        fontFamily: 'Martel-Bold'
    },
    icons: {
        color: '#f1f9f9',
        fontSize: 40,
        padding: 10
    },
    container: {
        width: '100%',
        backgroundColor: '#36827e',
        height: 50,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    }
})