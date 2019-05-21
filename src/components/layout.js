/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, {useEffect} from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import gql from 'graphql-tag'
import Header from "./header"
import Navbar from "./navBar"

import client from '../apollo/client'
import store from '../redux/store'

import { loginUser, logoutUser } from '../redux/actions/userActions'

const TOKEN_LOGIN = gql`
  {
    me {
      id
      username
      email
      role
    }
  }
`

const Layout = ({ children, pageInfo }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user, shallowEqual)

  useEffect(() => {

    async function fetchUser() {
      const { data: {me} } = await client.query({
        query: TOKEN_LOGIN
      })

      const data = {tokenLogin: {token: bearerToken, username: me.username, email: me.email}}

      store.dispatch(loginUser(data.tokenLogin))

      if (data.tokenLogin) localStorage.setItem('bearer_token', data.tokenLogin.token, '/')
      else localStorage.removeItem('bearer_token')

    }

    const bearerToken = localStorage.getItem('bearer_token')

    if (bearerToken && bearerToken !== ''){
      store.dispatch(loginUser({ token: bearerToken }))
      fetchUser();
    }else{
      store.dispatch(logoutUser())
    }

  }, [])

  return (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="px-0 main">
          <Row noGutters className="justify-content-center">
            <Col>
              <Header siteTitle={data.site.siteMetadata.title} />
            </Col>
          </Row>
          <Navbar pageInfo={pageInfo} />
          <Row noGutters>
            <Col>
              <Container className="mt-5">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <span>
                  © {new Date().getFullYear()}, Built with
                  {` `}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                </span>
              </footer>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)
}

export default Layout
