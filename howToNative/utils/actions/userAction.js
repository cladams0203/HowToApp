export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'
export const LOADING = 'LOADING'
import api from '../api'
import AsyncStorage from '@react-native-community/async-storage'



export const login = (input) => dispatch => {
    dispatch({type: LOADING})
    api().post('/users/login', input)
        .then(res => {
            AsyncStorage.setItem('token', res.data.token)
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: LOGIN_FAIL, payload: err})
        })
}

export const register = (input) => dispatch => {
    dispatch({type: LOADING})
    api().post('users/register')
        .then(res => {
            AsyncStorage.setItem('token', res.data.token)
            dispatch({type: REGISTER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: REGISTER_FAIL, payload: err})
        })
}

