import { rejectOnError } from './utils'

const createApi = serverUrl => {
  const login = (username, password) => {
    return fetch(serverUrl + '/identity/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(rejectOnError)
      .then(res => res.json())
      .then(data => data.token)
  }

  const logout = token => {
    return fetch(serverUrl + '/identity/logout', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-security-token': token
      }
    })
      .then(rejectOnError)
  }

  return { login, logout }
}

export default createApi
