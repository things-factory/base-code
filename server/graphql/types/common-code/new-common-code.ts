import gql from 'graphql-tag'

export const NewCommonCode = gql`
  input NewCommonCode {
    name: String!
    description: String
    details: [String]
  }
`
