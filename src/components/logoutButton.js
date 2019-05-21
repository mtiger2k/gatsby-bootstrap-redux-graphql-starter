import React from 'react'
import { navigate } from '@reach/router'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux/actions/userActions';

export default ({children}) => {
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(logoutUser())
    localStorage.removeItem('bearer_token')
    navigate('/')
  }
  return (
    <a href="#" onClick={logout}>
      {children}
    </a>
  )
}
