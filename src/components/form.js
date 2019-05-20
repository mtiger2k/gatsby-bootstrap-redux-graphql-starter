import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import { navigate } from '@reach/router'
import gql from 'graphql-tag'
import store from '../redux/store'
import client from '../apollo/client'
import { loginUser } from '../redux/actions/userActions'

// rwieruch

export default () => {
	const [ state, setState ] = useState({username: '', password: ''})
	const onChange = e => {
		const { name, value } = e.target
		setState({...state, [name]: value})
	}

	const onSubmit = async (e) => {
	    e.preventDefault()

	    const {
	      login,
	      password,
	    } = state


	    const { data } = await client.mutate({
	      mutation: LOGIN,
	      variables: {
	        login,
	        password,
	      },
	    })

	    store.dispatch(loginUser(data.signIn))

	    if (data.signIn) localStorage.setItem('bearer_token', data.signIn.token)
	    else localStorage.removeItem('bearer_token')

	    if (data && data.signIn) {
	      navigate('/app/profile')
	    }
	}


	return (
		<Form onSubmit={onSubmit}>
		  <Form.Group controlId="formBasicEmail">
		    <Form.Label>Username</Form.Label>
		    <Form.Control type="text" name="login" placeholder="Enter username" onChange={onChange}/>
		  </Form.Group>

		  <Form.Group controlId="formBasicPassword">
		    <Form.Label>Password</Form.Label>
		    <Form.Control type="password" name="password" placeholder="Password" onChange={onChange}/>
		  </Form.Group>
		  <Button variant="primary" type="submit">
		    Submit
		  </Button>
		</Form>
	)
}

const LOGIN = gql`
  mutation($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
    }
  }
`