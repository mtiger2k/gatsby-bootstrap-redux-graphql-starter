/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, {useEffect} from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import { useDispatch } from 'react-redux'
import Header from "./header"
import Navbar from "./navBar"

import { loginUser, fetchUser, logoutUser } from '../redux/actions/userActions'

const Layout = ({ children, pageInfo }) => {
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
