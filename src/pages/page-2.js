import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Counter from '../components/counter'
import Hero from "../components/hero"

const SecondPage = () => (
  <Layout pageInfo={{ pageName: "page-2" }}>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>

    <Counter />

    <Hero />

  </Layout>
)

export default SecondPage
