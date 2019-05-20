import React, { Component } from 'react'
import { Link } from '@reach/router'
import { connect } from 'react-redux'

import LogoutButton from './LogoutButton'


const mapStateToProps = (props) => {
  const { user } = props
  return user
}

class Status extends Component {

  render(){
    let details
    let color = this.props.color || 'inherit'
    let linkColor = this.props.linkColor || 'primary'
    const { user } = this.props

    if (!user) {
      details = (
        <p style={{color: 'white'}}>
          To get the full app experience, you’ll need to
          {` `}
          <Link to='/app/login' style={{color: linkColor }}>log in</Link>.
        </p>
      )
    } else {
      const { firstName, lastName } = user

      details = (
        <p style={{color: 'white'}}>
          Logged in as 
          {` `}
          <Link
            to='/app/profile'
            style={{ color: color }}
          >
            {firstName} {lastName}
          </Link>
          {` - `}
          <LogoutButton style={{ color: linkColor }}>Logout</LogoutButton>
        </p>
      )
    }

    return <div>{details}</div>
  }
}

export default connect(mapStateToProps)(Status)