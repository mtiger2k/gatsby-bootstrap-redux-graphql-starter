import React from 'react'
import { Redirect } from '@reach/router'
import Form from './form'
import { Container, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default () => {

  const user = useSelector(state => state.user.user)
  if(user && user.email){
    return <Redirect to='/app/profile' noThrow />
  }else{
    return (
      <Container>
        <Card>
          <Card.Title>Log in</Card.Title>
          <Card.Body>
            <Form />
          </Card.Body>
        </Card>
      </Container>
    )
  }

}