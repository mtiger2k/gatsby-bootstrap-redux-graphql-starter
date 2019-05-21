import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import { requestLogin } from '../redux/actions/userActions'

// rwieruch

export default () => {
	const dispatch = useDispatch()
	const [ state, setState ] = useState({username: '', password: ''})
	const onChange = e => {
		const { name, value } = e.target
		setState({...state, [name]: value})
	}

	const onSubmit = (e) => {
		e.preventDefault()
	    const {
	      login,
	      password,
	    } = state
		dispatch(requestLogin(login, password)).then(result => console.log('Yaay!', result))
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