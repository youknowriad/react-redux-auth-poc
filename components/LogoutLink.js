import React from 'react'

const LogoutLink = ({ onLogout }) => (
    <a href="" onClick={
      (e) => {
        e.preventDefault()
        onLogout()
      }
    }>Logout</a>
)

export default LogoutLink
