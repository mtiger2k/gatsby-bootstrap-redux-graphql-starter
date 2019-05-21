
import React from 'react'
import { Container, Card } from "react-bootstrap"
import { useSelector } from 'react-redux'

export default () => {

  const user = useSelector(state => state.user.user)
  const { username, email } = user
  
  return (
    <Container className="text-center">
      
      <h1>Welcome back, {username}!</h1>
      <Card>
        <Card.Body>
        <Card.Title>User Data:</Card.Title>
        <Card.Text>
          username: {username}<br/>
          E-Mail: {email}
        </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )

}