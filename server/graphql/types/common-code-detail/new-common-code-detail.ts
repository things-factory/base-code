import { gql } from 'apollo-server-koa'

export const NewCommonCodeDetail = gql`
  input NewCommonCodeDetail {
    name: String!
    parent: String!
    description: String
    rank: Int!
  }
`
