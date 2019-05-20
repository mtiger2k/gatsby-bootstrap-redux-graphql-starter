
import React, { Component } from 'react'
import { Container, Card } from "react-bootstrap"

import { connect } from 'react-redux'

const mapStateToProps = (props) => {
  const { user } = props
  return user
}

class Profile extends Component{

  render(){
    const { user } = this.props
    const { firstName, lastName, email } = user
    
    return (
      <Container className="text-center">
        
        <h1>Welcome back, {firstName} {lastName}!</h1>
        <Card>
          <Card.Body>
          <Card.Title>User Data:</Card.Title>
          <Card.Text>
            Firstname: {firstName}<br/>
            Lastname: {lastName}<br/>
            E-Mail: {email}
          </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

export default connect(mapStateToProps)(Profile)