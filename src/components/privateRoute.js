import React from 'react'
import { Redirect } from '@reach/router'
import { useSelector } from "react-redux"
import { selectUser } from '../redux/selectors/user'

export default ({ component: Component, location, ...rest }) => {
  
  const { user } = useSelector(selectUser)

  if (!user && location.pathname !== `/app/login`) {
    // If we’re not logged in, redirect to login page.
    return <Redirect to='/app/login' noThrow/>
  }

  return <Component {...rest} />
}