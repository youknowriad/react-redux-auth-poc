import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_SUCCESS } from '../actions/types'

const authentication = (state = { loggedin: false, token: null }, action) => {
    switch (action.type) {
        case AUTH_LOGIN_SUCCESS:
            return { loggedin: true, token: action.payload }
        case AUTH_LOGOUT_SUCCESS:
            return { loggedin: false, token: null }
        default:
            return state
    }
}

export default authentication
