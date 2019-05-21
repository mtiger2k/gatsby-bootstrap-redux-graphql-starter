import gql from 'graphql-tag'
import client from '../../apollo/client'

const LOGIN = gql`
  mutation($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
    }
  }
`

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

export const loginApi = async (login, password) => {

    const { data } = await client.mutate({
      mutation: LOGIN,
      variables: {
        login,
        password,
      },
    })

    return data.signIn

}

export const fetchMeApi = async () => {
	const { data } = await client.query({
	   query: TOKEN_LOGIN
	})

	return data.me;

}