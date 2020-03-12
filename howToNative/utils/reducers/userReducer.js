import { LOGIN_FAIL, LOGIN_SUCCESS, LOADING } from '../actions/userAction'


const initialState = {
    user_id: '',
    username: '',
    bio: '',
    email: '',
    token: '',
    allowPost: '',
    error: ''
}

export function userReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                user_id: action.payload.id,
                username: action.payload.username,
                bio: action.payload.bio,
                email: action.payload.email,
                token: action.payload.token,
                allowPost: action.payload.allowPost
            }
        case LOGIN_FAIL:
            return {
                error: action.payload.message
            }
            case LOADING :
                return {
                    loading: true
                }
            
        default:
            return state
    }
}