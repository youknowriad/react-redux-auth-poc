Some Authentication utilities
=============================

Requires, redux, redux-saga and redux-form

## bootstrap

```javascript
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { fork } from 'redux-saga/effects'

// Loading module content
import { reducers as authReducers, createAuthenticationSaga, createLoginForm } from './index'


function* rootSaga() {
  yield fork(createAuthenticationSaga('http://myendpoint'))
}

const reducer = combineReducers({
    form,
    authentication: authReducers.authentication,
    loginForm: authReducers.loginForm
})

const store = createStore(reducer, applyMiddleware(createSagaMiddleware(rootSaga)))

const LoginForm = createLoginForm('loginForm')

const Home = () => (
   <LoginForm />
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```
