import React, { PropTypes } from 'react'

const LoginForm = ({ fields: { username, password }, handleSubmit, loginError }) => {

  const createFieldText = (field, id, label, placeholder) => (
    <div className={['form-group', field.touched && field.error ? 'has-error has-feedback' : '' ].join(' ')}>
      <label htmlFor={id}>{label}</label>
      <input type="text" name={id} className="form-control" placeholder={placeholder} {...field} />
      {
        field.touched && field.error ? (
          <span className="form-control-feedback">
            <i className="fa fa-times" />
          </span>
        ) : null
      }
    </div>
  )

  return (
    <form onSubmit={handleSubmit}>
      {
        loginError
          ? <div className="alert alert-danger">Erreur d'authentification : Vérifier vos credentials.</div>
          : null
      }
      { createFieldText(username, 'username', 'Nom d\'utilisateur', 'Nom d\'utilisateur') }
      { createFieldText(password, 'password', 'Mot de passe', 'Mot de passe') }
      <div className="form-group">
        <button type="submit" className="btn btn-primary-full">Valider</button>
      </div>
    </form>
  )
}

LoginForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default LoginForm
