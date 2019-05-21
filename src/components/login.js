import React from 'react'
import { Redirect } from '@reach/router'
import Form from './form'
import { Container, Card } from 'react-bootstrap'
import { connect } from 'react-redux'

const mapStateToProps = (props) => {
  const { user } = props
  return user
}

class Login extends React.Component {

  render() {
    const { user } = this.props
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
}

export default connect(
  mapStateToProps,
)(Login)
