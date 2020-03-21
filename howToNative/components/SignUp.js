import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, TextInput, Image, TouchableHighlight } from 'react-native'
import { styles } from './styles'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { register } from '../utils/actions/userAction'
import { useDispatch, useSelector } from 'react-redux'
import { Nav } from './Nav'


export function SignUp({ navigation }) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const radio_props = [
        {label: 'Lurker', value: false, text: 'I\'m just here to learn'},
        {label: 'Contributor', value: true, text: 'I\'ve got stuff to contribute'}
    ]
    const [form, setForm] = useState({
        username: '',
        password: '',
        email: '',
        bio: '',
        allowPost: ''
    })
  
    

    return(
        <SafeAreaView>
            <Nav navigation={navigation}/>
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
                <Text style={{
                    fontFamily: 'Martel-Bold',
                    fontSize: 36,
                    color: '#2a4565',
                    marginTop: 25
                }}>Sign Up</Text>
                <TouchableHighlight onPress={() => navigation.navigate('Login')}>
                    <Text style={{
                        fontFamily: 'Martel-Bold',
                        fontSize: 13,
                        color: '#4978ae',
                        textAlign: "center",
                    }}>Already have an account? Login here!</Text>
                </TouchableHighlight>
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
                <Text style={{
                    fontSize: 28,
                    fontFamily: 'Martel-Regular',
                    // height: 30,
                    color: '#2a4565',
                    marginTop: 30
                }}>Account Type</Text>
                <View style={{width: '100%', alignItems:'center'}}>
                    <RadioForm>
                        {radio_props.map((item, index) => {
                            return (
                                <View key={index}>
                                <RadioButton key={index} style={{
                                    marginTop: 10
                                    
                                }}>
                                    <RadioButtonInput 
                                        obj={item}
                                        index={index}
                                        isSelected={form.allowPost === item.value}
                                        onPress={value => setForm({...form, allowPost: value})}
                                        buttonOuterColor={'#36827e'}
                                        buttonInnerColor={'#36827e'}
                                        />
                                    <RadioButtonLabel 
                                        obj={item}
                                        index={index}
                                        labelStyle={{
                                            fontFamily:'Martel-Bold',
                                            fontSize: 22,
                                            marginLeft: 20,
                                            color: '#2a4565',
                                            height: 30,
                                            paddingTop: 15
                                            
                                        }}
                                        />
                                    
                                </RadioButton>
                                <Text style={{
                                    fontFamily: 'Martel-Bold',
                                    fontSize: 18,
                                    color: '#4978ae',
                                    marginLeft: 50
                                }}> {item.text} </Text>
                                </View>
                            )
                        })}
                    </RadioForm>
                    <Text style={{
                        fontFamily: 'Martel-Regular',
                        fontSize: 13,
                        color: '#2a4565',
                        width: '60%',
                        textAlign: "center",
                        marginTop: 10
                    }}>(This can be changed at any time in account settings)</Text>
                </View>
                <Text style={{
                    fontSize: 28,
                    fontFamily: 'Martel-Regular',
                    // height: 30,
                    color: '#2a4565',
                    marginTop: 30,
                    width: '80%',
                    textAlign: "center"
                }}>Email Address (optional)</Text>
                <TextInput 
                    style={styles.searchInput}
                    onChangeText={text => setForm({...form, email: text})}
                    value={form.email}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                    />
                <Text style={{
                    fontFamily: 'Martel-Regular',
                    fontSize: 13,
                    color: '#2a4565',
                    marginTop: 10,
                    textAlign: "center",
                    width: '52%'
                }}>Used mainly to verify your identity if you get locked out. We don't send spam</Text>
                <Text style={{
                    fontSize: 28,
                    fontFamily: 'Martel-Regular',
                    // height: 30,
                    color: '#2a4565',
                    marginTop: 30,
                    width: '80%',
                    textAlign: "center"
                }}>Profile Bio (optional)</Text>
                <TextInput 
                    multiline={true}
                    style={{...styles.searchInput, height: 150, padding: 20}}
                    onChangeText={text => setForm({...form, bio: text})}
                    value={form.bio}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                    />
                <Text style={{
                    fontFamily: 'Martel-Regular',
                    fontSize: 13,
                    color: '#2a4565',
                    width: '90%',
                    textAlign: "center"
                }}>A few words about where you come from and what you're excited to learn.</Text>
                <View style={{...styles.moreButtonContainer, width: '100%'}}>
                <TouchableHighlight style={{
                    backgroundColor: '#fdba77',
                    borderRadius: 30,
                    width: '50%',
                    height: 50,
                }}
                onPress={() => {
                    // setForm({
                    //     username: '',
                    //     password: '',
                    //     email: '',
                    //     bio: '',
                    //     allowPost: ''
                    // })
                    
                    dispatch(register(form))
                   
                }}
                >
                    <Text style={styles.moreButtonText}>Submit</Text>
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