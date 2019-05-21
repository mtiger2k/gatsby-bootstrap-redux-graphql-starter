import React from "react"
import { Router } from '@reach/router'

import Layout from "../components/layout"
import PrivateRoute from '../components/privateRoute'
import Profile from '../components/profile'
import Login from '../components/login'
import Plans from '../components/plans'

const SecondPage = () => (
  <Layout pageInfo={{ pageName: "app" }}>
    
    <Router>
        <PrivateRoute path='/app/profile' component={Profile} />
        <Plans path='/app/plans' />
        <Login path='/app/login' />
        <PrivateRoute path='/app/' component={Profile} />
    </Router>

  </Layout>
)

export default SecondPage
