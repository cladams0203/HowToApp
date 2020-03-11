import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native'
import { Icon, Input } from 'react-native-elements'
import { styles } from './styles'
import api from '../utils/api'
import { Nav } from './Nav'

export function SubTopic({ navigation }) {

    const [selectedHowTo, setSelectedHowTo] = useState()
    console.log(selectedHowTo)

    useEffect(() => {
        api().get('/how-to')
            .then(res => {
                // console.log(res.data)
                setSelectedHowTo(res.data.filter(item => item.topic === `Arts and Crafts`))
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <SafeAreaView>
            <Nav navigation={navigation} />
        <ScrollView style={styles.mainContainer}>
            <Text style={styles.topicHeading}>Hobbies & Crafts</Text>
            <Input 
                placeholder='Search Topic' 
                leftIcon={
                    <Icon name='search' color='#36827e' size={40} />
                } 
                inputContainerStyle={styles.topicSearch}
                placeholderTextColor='#61bdb8'
                />
            <View style={styles.subTopicButtonContioner}>
                <TouchableHighlight style={styles.trendingButton}>
                    <Text style={styles.trendingButtonText}>Sort By: Trending</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.keywordButton}>
                    <Text style={styles.trendingButtonText}>Keyword Filters</Text>
                </TouchableHighlight>
            </View>
            <View>
                {selectedHowTo && selectedHowTo.map((item, index) => {
                    return (
                        <TouchableHighlight key={index}>
                            <View>
                                <Text>{item.title}</Text>
                            </View>
                        </TouchableHighlight>
                    )
                })}
            </View>
            <View style={styles.moreButtonContainer}>
                <TouchableHighlight style={styles.moreButton}>
                    <Text style={styles.moreButtonText}>More >></Text>
                </TouchableHighlight>
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