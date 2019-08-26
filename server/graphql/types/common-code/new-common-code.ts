import { gql } from 'apollo-server-koa'

export const NewCommonCode = gql`
  input NewCommonCode {
    name: String!
    description: String
    details: [String]
  }
`
