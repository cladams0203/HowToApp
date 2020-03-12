import axios from 'axios'
import  AsyncStorage  from '@react-native-community/async-storage'

export default function api() {
    const token = AsyncStorage.getItem('token')

    return axios.create({
        baseURL: 'https://how-to-lifehack.herokuapp.com',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    })
}