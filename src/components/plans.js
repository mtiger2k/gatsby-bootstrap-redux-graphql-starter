import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'

const Plans = () => {

  return (
    <Container className="text-center">
      <h1>Our pricing</h1>
      <StaticQuery
          query={graphql`
            query PlansQuery {
              allPlansJson {
                edges {
                  node {
                    id
                    slug
                    title
                    price
                    featured
                    features
                  } 
                }
              }
            }
          `}
          render={data => {
            return data.allPlansJson.edges.map(plan => (
              <Card>
                <Card.Body>
                  <Card.Title>
                    {plan.node.title}
                  </Card.Title>
                  <Card.Text>
                    <p>{plan.node.price}</p>
                    <p>{ plan.node.features.map((e, i) => <span key={`plan-${plan.slug}-${i}`}>{e}<br/></span>)}</p>
                  </Card.Text>
                  <Button color="primary">
                    Select plan
                  </Button>
                </Card.Body>
              </Card>
            ))
          }}
      />
    </Container>
  )
}

export default Plans