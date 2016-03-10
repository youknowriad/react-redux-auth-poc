import React from 'react'

const LogoutLink = ({ onLogout, children = 'Logout', className = '' }) => (
    <a href="" className={className} onClick={
      (e) => {
        e.preventDefault()
        onLogout()
      }
    }>{children}</a>
)

export default LogoutLink
