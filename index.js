import authenticationReducer from './reducers/authentication'
import loginFormReducer from './reducers/login-form'
import createAuthenticationSaga from './sagas/authentication'
import createLoginForm from './containers/LoginForm'
import LogoutLink from './containers/LogoutLink'

export const reducers = {
  authentication: authenticationReducer,
  loginForm: loginFormReducer
}

export { createAuthenticationSaga, createLoginForm, LogoutLink }
