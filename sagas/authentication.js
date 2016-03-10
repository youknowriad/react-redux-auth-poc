import { take, call, put } from 'redux-saga/effects'
import { AUTH_LOGIN_REQUEST, AUTH_LOGIN_ERROR, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_REQUEST, AUTH_LOGOUT_SUCCESS } from '../actions/types'
import createApi from '../api/authentication'

const STORAGE_KEY = 'security-token'

const createSaga = serverUrl => {
  const { login, logout } = createApi(serverUrl)

  function* loginSaga() {
    let token = localStorage.getItem(STORAGE_KEY)
    let loggedin = !!token
    while (!loggedin) {
      const { payload: { username, password }} = yield take(AUTH_LOGIN_REQUEST)
      try {
        token = yield call(login, username, password)
        localStorage.setItem(STORAGE_KEY, token)
        loggedin = true
      } catch (error) {
        yield put({ type: AUTH_LOGIN_ERROR })
      }
    }

    yield put({ type: AUTH_LOGIN_SUCCESS, payload: token })
    return token
  }

  function* logoutSaga(token) {
    yield take(AUTH_LOGOUT_REQUEST)
    yield call(logout, token)
    localStorage.removeItem(STORAGE_KEY)
    yield put({ type: AUTH_LOGOUT_SUCCESS })
  }

  function* authenticationSaga() {
    while (true) {
      const token = yield loginSaga()
      yield logoutSaga(token)
    }
  }

  return authenticationSaga
}

export default createSaga
