
import React from 'react'
import { Container, Card } from "react-bootstrap"
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/selectors/user'

export default () => {

  const { user } = useSelector(selectUser)
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