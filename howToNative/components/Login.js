import React, { useState, useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView, Text, View, TextInput, Image, TouchableHighlight } from 'react-native'
import { styles } from './styles'
import { Nav } from './Nav'
import { login } from '../utils/actions/userAction'
import { useDispatch } from 'react-redux'

export function Login({ navigation }) {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    return (
        <SafeAreaView>
            <Nav navigation={navigation} />
        <KeyboardAwareScrollView style={{
            backgroundColor: '#a8dbd8',
            height: '100%'
        }}>
            <View style={{
                width: '90%',
                flexDirection: "column",
                alignItems: "center",
                alignSelf: "center",
                paddingBottom: 20,
                marginTop: 50,
                marginBottom: 220
            }}>
                <Text style={{
                    fontFamily: 'Martel-Bold',
                    fontSize: 36,
                    color: '#2a4565',
                    marginTop: 25
                }}>Login</Text>
                <Text style={{
                    fontFamily: 'Martel-Regular',
                    fontSize: 28,
                    // height: 30,
                    color: '#2a4565',
                    marginTop: 10
                }}>Username</Text>
                <TextInput
                    onChangeText={text => setForm({...form, username: text})}
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
                    fontSize: 28,
                    fontFamily: 'Martel-Regular',
                    // height: 30,
                    color: '#2a4565',
                    marginTop: 30
                }}>Password</Text>
                <TextInput 
                    style={styles.searchInput}
                    onChangeText={text => setForm({...form, password: text})}
                    value={form.password}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                    />
                    <TouchableHighlight style={{
                        backgroundColor: '#fdba77',
                        borderRadius: 30,
                        width: '50%',
                        height: 50,
                        marginTop: 50
                    }}
                    onPress={() => {
                        setForm({username: '', password: ''})
                        dispatch(login(form))
                    }}
                    >
                    <Text style={styles.moreButtonText}>Submit</Text>
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
            
        </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}