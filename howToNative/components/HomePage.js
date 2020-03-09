import React, { useState } from 'react'
import { ScrollView, Text, View, TouchableHighlight, StyleSheet, TextInput, Image } from 'react-native'
import { Input, Icon } from 'react-native-elements'
import { styles } from './styles'

export function HomePage() {
    const [topicActive, setTopicActive] = useState(true)
    const [topics, setTopics] = useState([
        {name: 'Greatest Grilled Cheese', img: require('../images/grilledCheese.png'), topic: 'Food & Ents'},
        {name: 'Crochet a Baby Yoda', img: require('../images/babyYoda.png'), topic: 'Hobbies & Crafts'},
        {name: 'Zero-Scape Your Yard', img: require('../images/zeroScape.png'), topic: 'Home & Garden'},
        {name: 'Rock Stay-Cation', img: require('../images/rockStay.png'), topic: 'Travel'},
        {name: 'Land a Drone', img: require('../images/drone.png'), topic: 'Computers & Tech'},
        {name: 'Change a Tire', img: require('../images/auto.png'), topic: 'Auto'}

    ])

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.heading}>Welcome!</Text>
                <Text style={styles.welcomeText}>We can't wait to show you what you can do today</Text>
                <TouchableHighlight style={styles.startedButton}>
                    <Text style={styles.buttonText}>Let's Get Started ></Text>
                </TouchableHighlight>
                <Text style={styles.browse}>(Browse Topics)</Text>
            </View>
            <View style={styles.searchContainer}>
                <Text style={styles.searchHeading}>Find Out How To...</Text>
                <Input leftIcon={<Icon name='search' color='#36827e' size={40} />} inputContainerStyle={styles.searchInput}/>
                <Text style={styles.searchText}>Advanced Search</Text>
            </View>
            <View style={styles.creatorContainer}>
                <Image source={require('../images/studioIcon.png')} style={styles.creatorImage}></Image>
                <Text style={styles.creatorHeading}>Creator Studio</Text>
                <Text style={styles.creatorText}>Do more with a How-To account!  Log in or Sign Up Here</Text>
            </View>
            <View style={styles.draftContainer}>
                <Image source={require('../images/draftIcon.png')} style={styles.creatorImage}></Image>
                <Text style={styles.draftHeading}>Draft an Article</Text>
                <Text style={styles.draftText1}>Add to what makes How-To great!</Text>
                <Text style={styles.draftText2}>Share your knowledge, join the community!</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableHighlight style={
                    !topicActive ?
                    styles.toggleButton :
                    null
                }
                onPress={() => {
                    setTopicActive(false)
                }}
                >
                    <Text style={
                        topicActive ?
                        styles.toggleText :
                        styles.toggleButtonText
                    }>Top Articles</Text>
                </TouchableHighlight>
                <TouchableHighlight style={
                    topicActive ?
                    styles.toggleButton :
                    null
                }
                onPress={() => {
                    setTopicActive(true)
                }}
                    >
                    <Text style={
                        !topicActive ?
                        styles.toggleText :
                        styles.toggleButtonText
                    }>By Topic</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.topicsContainer}>
                {topicActive && topics.map((item, index) => {
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

