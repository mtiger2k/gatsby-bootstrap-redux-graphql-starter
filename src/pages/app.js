import React, {useEffect} from "react"
import { Router } from '@reach/router'

import Layout from "../components/layout"
import PrivateRoute from '../components/privateRoute'
import Profile from '../components/profile'
import Login from '../components/login'
import Plans from '../components/plans'

import { useDispatch } from 'react-redux'

import { loginUser, fetchUser, logoutUser } from '../redux/actions/userActions'

const SecondPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    const bearerToken = localStorage.getItem('bearer_token')

    if (bearerToken && bearerToken !== ''){
      dispatch(loginUser({ token: bearerToken }))
      dispatch(fetchUser());
    }else{
      dispatch(logoutUser())
    }

  }, [])
	
	return (
	  <Layout pageInfo={{ pageName: "app" }}>
	    
	    <Router>
	        <PrivateRoute path='/app/profile' component={Profile} />
	        <Plans path='/app/plans' />
	        <Login path='/app/login' />
	        <PrivateRoute path='/app/' component={Profile} />
	    </Router>

	  </Layout>
	)
}

export default SecondPage
