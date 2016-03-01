import { take, call, put } from 'redux-saga/effects'
import { AUTH_LOGIN_REQUEST, AUTH_LOGIN_ERROR, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_REQUEST, AUTH_LOGOUT_SUCCESS } from '../actions/types'
import createApi from '../api/authentication'

const createSaga = serverUrl => {
  const { login, logout } = createApi(serverUrl)

  function* loginSaga() {
    let loggedin = false
    let token
    while (!loggedin) {
      const { payload: { username, password }} = yield take(AUTH_LOGIN_REQUEST)
      try {
        token = yield call(login, username, password)
        yield put({ type: AUTH_LOGIN_SUCCESS, payload: token })
        loggedin = token
      } catch (error) {
        yield put({ type: AUTH_LOGIN_ERROR })
      }
    }

    return token
  }

  function* logoutSaga(token) {
    yield take(AUTH_LOGOUT_REQUEST)
    yield call(logout, token)
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
