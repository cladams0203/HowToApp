import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native'
import api from '../utils/api'
import { styles } from './styles'
import { Nav } from './Nav'

export function HowToDetails({ navigation }) {

    const [howTo, setHowTo] = useState()
    useEffect(() => {
        api().get('/how-to/1')
            .then(res => {
                setHowTo(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <SafeAreaView>
            <Nav navigation={navigation} />
        <ScrollView style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={{
                    width: '100%',
                    justifyContent: "center",
                    flexDirection: "row",
                    marginTop: 20
                }}>
                    <Text style={{
                        lineHeight: 50,
                        fontFamily: 'Martel-Bold',
                        fontSize: 36,
                        width: '50%',
                        color: '#2a4565'
                    }}> {howTo && howTo.title} </Text>
                </View>
                <Text style={{
                    marginTop: 15,
                    width: '90%',
                    textAlign: "center",
                    fontFamily: 'Martel-Bold',
                    lineHeight: 32,
                    fontSize: 22,
                    color: '#2a4565'
                }}>Problem: {howTo && howTo.problem} </Text>
                <Text style={{
                    marginTop: 15,
                    width: '90%',
                    textAlign: "center",
                    fontFamily: 'Martel-Bold',
                    lineHeight: 32,
                    fontSize: 22,
                    color: '#2a4565'
                }}>Solution: {howTo && howTo.solution} </Text>
                {howTo && howTo.instructions.map((item, index) => {
                    return(
                        <View key={index} style={{
                            width: '90%',
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <Text style={{
                                fontSize: 36,
                                fontFamily: 'Martel-Bold',
                                color: '#2a4565',
                                width: '60%',
                                textAlign: "center",
                                lineHeight: 50,
                                marginTop: 20
                            }}>Step {item.step_number}: {item.step_title} </Text>
                            
                            <Text style={{
                                fontFamily: 'Martel-Regular',
                                fontSize: 22,
                                lineHeight: 32,
                                marginTop: 10
                            }}> {item.description} </Text>
                        </View>
                    )
                })}
            </View>
            <View style={styles.footerContainer}>
                <Image source={require('../images/footerStudio.png')} style={{alignSelf: "center", marginBottom: 10}}></Image>
                <View style={styles.footerTextContainer}>
                    <Text style={styles.footerHeading}>HOW-TO: LAND A DRONE</Text>
                    <Text style={styles.footerText}>Featured Article</Text>
                </View>
                <Image source={require('../images/footerDraft.png')} style={{alignSelf: "center", marginBottom: 10}}></Image>
            </View>

        </ScrollView>
        </SafeAreaView>
    )
}