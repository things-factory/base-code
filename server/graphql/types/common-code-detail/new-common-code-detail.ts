import gql from 'graphql-tag'

export const NewCommonCodeDetail = gql`
  input NewCommonCodeDetail {
    commonCode: ObjectRef!
    name: String!
    description: String
    rank: Int!
  }
`
