import React, { Component } from 'react'
import gql from 'graphql-tag'
import { navigate } from '@reach/router'
import store from '../redux/store'
import client from '../apollo/client'

import { logoutUser } from '../redux/actions/userActions';

class LogoutButton extends Component {
  logout = () => {
    /*client.mutate({
      mutation: LOGOUT,
    }).then(({ data }) => {
      if (data.logout) {
        navigate('/')
      }
    })*/
    store.dispatch(logoutUser())
    localStorage.removeItem('bearer_token')
  }

  render() {
    const { children } = this.props
    return (
      <a {...this.props} onClick={this.logout}>
        {children}
      </a>
    )
  }
}

export default LogoutButton

const LOGOUT = gql`
  mutation Logout {
    logout
  }
`
