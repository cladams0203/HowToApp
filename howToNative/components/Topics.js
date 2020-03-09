import React, { useState } from 'react'
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native'
import { styles } from './styles'
export function Topics() {
    const [topics, setTopics] = useState([
        {name: 'Greatest Grilled Cheese', img: require('../images/grilledCheese.png'), topic: 'Food & Ents'},
        {name: 'Crochet a Baby Yoda', img: require('../images/babyYoda.png'), topic: 'Hobbies & Crafts'},
        {name: 'Zero-Scape Your Yard', img: require('../images/zeroScape.png'), topic: 'Home & Garden'},
        {name: 'Rock Stay-Cation', img: require('../images/rockStay.png'), topic: 'Travel'},
        {name: 'Land a Drone', img: require('../images/drone.png'), topic: 'Computers & Tech'},
        {name: 'Change a Tire', img: require('../images/auto.png'), topic: 'Auto'}

    ])
    return(
        <ScrollView style={styles.mainContainer}>
            <Text style={styles.topicHeading}>Topics</Text>
            <View style={styles.topicsContainer}>
                {topics && topics.map((item, index) => {
                    return  <View key={index} style={styles.topicItemContainer}>
                                <Text style={styles.topicText}>{item.name}</Text>
                                <Image source={item.img}></Image>
                                <Text style={styles.topicText}>{item.topic}</Text>
                            </View>
                })
                }
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
    )
}

