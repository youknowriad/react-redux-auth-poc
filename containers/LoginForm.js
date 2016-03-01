import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { AUTH_LOGIN_REQUEST } from '../actions/types'

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'required'
  }
  if (!values.password) {
    errors.password = 'required'
  }

  return errors
}

const createLoginForm = (id = 'loginForm') => {
  const mapDispatchToProps = dispatch => ({
    onSubmit: (values) => {
      dispatch({ type: AUTH_LOGIN_REQUEST, payload: values })
    }
  })

  const mapStateToProps = state => ({
    loginError: state[id].error
  })

  let LoginFormContainer = reduxForm({
    form: id,
    fields: ['username', 'password'],
    validate
  })(LoginForm)

  return connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)
}

export default createLoginForm
