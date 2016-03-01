import { AUTH_LOGIN_SUCCESS, AUTH_LOGIN_ERROR, AUTH_LOGIN_REQUEST } from '../actions/types'

const loginForm = (state = { loading: false, error: false }, action) => {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return { loading: true, error: false }
    case AUTH_LOGIN_ERROR:
      return { loading: false, error: true }
    case AUTH_LOGIN_SUCCESS:
      return { loading: false, error: false }
    default:
      return state
  }
}

export default loginForm
