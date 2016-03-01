import { connect } from 'react-redux'
import LogoutLink from '../components/LogoutLink'
import { AUTH_LOGOUT_REQUEST } from '../actions/types'

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch({ type: AUTH_LOGOUT_REQUEST })
})

export default connect(() => ({}), mapDispatchToProps)(LogoutLink)

