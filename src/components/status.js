import React from 'react'
import { Link } from '@reach/router'
import { useSelector } from 'react-redux'

import LogoutButton from './LogoutButton'


export default () => {

  const user = useSelector(state => state.user.user)

  let details

  if (!user) {
    details = (
      <p style={{color: 'white'}}>
        To get the full app experience, you’ll need to
        {` `}
        <Link to='/app/login'>log in</Link>.
      </p>
    )
  } else {
    const { username, email } = user

    details = (
      <p style={{color: 'white'}}>
        Logged in as 
        {` `}
        <Link
          to='/app/profile'
        >
          {username} {email}
        </Link>
        {` - `}
        <LogoutButton>Logout</LogoutButton>
      </p>
    )
  }

  return (<div>{details}</div>)

}
