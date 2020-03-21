import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, TextInput, Image, TouchableHighlight } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styles } from './styles'
import { Nav } from './Nav'


export function DraftArticle({navigation}) {

    const [form, setForm] = useState({

    })

    return (
        <SafeAreaView>
            <Nav navigation={navigation} />
        <KeyboardAwareScrollView style={{
            backgroundColor: '#a8dbd8',
        }}>
            <View style={{
                width: '90%',
                flexDirection: "column",
                alignItems: "center",
                alignSelf: "center",
                paddingBottom: 20
            }}>
                <View style={{
                    justifyContent:"center",
                    alignItems: "center",
                    marginTop: 70
                }}>
                    <Image source={require('../images/lightDraftIcon.png')} style={{
                        zIndex:1,
                        position: 'absolute',
                        alignSelf: 'center'
                    }}></Image>
                <Text style={{
                    fontFamily: 'Martel-Bold',
                    fontSize: 36,
                    color: '#2a4565',
                    zIndex:1
                }}>Draft an Article</Text>
                </View>
                <Text style={{
                    fontFamily: 'Martel-Bold',
                    fontSize: 28,
                    color: '#2a4565',
                    marginTop: 70
                }}>Introduction Section</Text>
                <Text style={{
                    fontFamily: 'Martel-Regular',
                    fontSize: 28,
                    // height: 30,
                    color: '#2a4565',
                    marginTop: 10
                }}>Title</Text>
                <TextInput
                    onChangeText={text => setForm({...form, title: text})}
                    value={form.username}
                    style={{...styles.searchInput,
                        color: '#2a4565',
                        fontFamily: 'Martel-Regular',
                        fontSize: 17,
                    }} 
                    autoCapitalize='none'
                    autoCorrect={false}
                    />
                <Text style={{
                    fontFamily: 'Martel-Bold',
                    fontSize: 13,
                    color: '#2a4565',
                    width: '60%',
                    textAlign: "center",
                    lineHeight: 20,
                    marginTop: 10
                }}>Use the form "verbing a noun" e.g., "breaking an egg"</Text>
                <Text style={{
                    fontSize: 28,
                    fontFamily: 'Martel-Regular',
                    // height: 30,
                    color: '#2a4565',
                    marginTop: 30
                }}>Problem</Text>
                <TextInput 
                    style={{...styles.searchInput, height: 120}}
                    multiline={true}
                    onChangeText={text => setForm({...form, password: text})}
                    value={form.password}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                    />
                <Text style={{
                    fontFamily: 'Martel-Bold',
                    fontSize: 13,
                    color: '#2a4565',
                    width: '70%',
                    textAlign: "center",
                    lineHeight: 20,
                    marginTop: 10
                }}>Whenever possible, use concrete and specific language.</Text>
                <Text style={{
                    fontSize: 28,
                    fontFamily: 'Martel-Regular',
                    // height: 30,
                    color: '#2a4565',
                    marginTop: 30,
                    width: '80%',
                    textAlign: "center"
                }}>Solution</Text>
                <TextInput 
                    multiline={true}
                    style={{...styles.searchInput, height: 120}}
                    onChangeText={text => setForm({...form, email: text})}
                    value={form.email}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                    />
                <Text style={{
                    fontFamily: 'Martel-Bold',
                    fontSize: 13,
                    color: '#2a4565',
                    marginTop: 10,
                    textAlign: "center",
                    width: '55%'
                }}>Again, as specific and concrete as possible</Text>
                
                <View style={{...styles.moreButtonContainer, width: '100%'}}>
                <TouchableHighlight style={{
                    backgroundColor: '#fdba77',
                    borderRadius: 30,
                    width: '50%',
                    height: 50,
                }}>
                    <Text style={styles.moreButtonText}>Next</Text>
                </TouchableHighlight>
            </View>
            </View>
            <View style={styles.footerContainer}>
                <Image source={require('../images/footerStudio.png')} style={{alignSelf: "center", marginBottom: 10}}></Image>
                <View style={styles.footerTextContainer}>
                    <Text style={styles.footerHeading}>HOW-TO: LAND A DRONE</Text>
                    <Text style={styles.footerText}>Featured Article</Text>
                </View>
                <Image source={require('../images/footerDraft.png')} style={{alignSelf: "center", marginBottom: 10}}></Image>
            </View>
        </KeyboardAwareScrollView>
                </SafeAreaView>
    )
}