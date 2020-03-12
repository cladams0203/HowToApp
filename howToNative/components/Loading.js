import React from 'react'
import { View, StyleSheet, ImageBackground, Text, Image } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

export function Loading() {

    return (
            <ImageBackground source={require('../images/loadingBackground.png')}
            // imageStyle={{resizeMode:'stretch'}}
            style={styles.background}>
                <View style={styles.flexView}>
                    <Image source={require('../images/loadingIcon.png')} />
                    <Text style={styles.textStyle}>How-To</Text>
                    <Spinner 
                    textStyle={{color: 'white'}}
                        visible={true}
                        textContent={'...Loading'}
                    />
                </View>
            </ImageBackground>   
    )
}

const styles = StyleSheet.create({
    background:{
        width: '100%',
        height: '100%'
    },
    flexView: {
        flexDirection: 'column',
        alignItems: 'center',
        margin: '30%'
    },
    textStyle: {
        color: 'white',
        marginTop: '10%',
        fontSize: 28,
        fontFamily: 'Martel-Bold'
    }
})