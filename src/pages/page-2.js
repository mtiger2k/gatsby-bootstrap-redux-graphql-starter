import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Counter from '../components/counter'
import Hero from "../components/hero"

import { useInjectReducer } from '../utils/injectReducer';
//import { useInjectSaga } from '../utils/injectSaga';

import reducer from '../redux/reducers/countReducer'
const key = 'count';

const SecondPage = () => {

	useInjectReducer({ key, reducer });

	return (
	  <Layout pageInfo={{ pageName: "page-2" }}>
	    <SEO title="Page two" />
	    <h1>Hi from the second page</h1>
	    <p>Welcome to page 2</p>
	    <Link to="/">Go back to the homepage</Link>

	    <Counter />

	    <Hero />

	  </Layout>
	)
}

export default SecondPage
