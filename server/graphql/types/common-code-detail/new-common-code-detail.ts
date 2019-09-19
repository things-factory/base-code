import { gql } from 'apollo-server-koa'

export const NewCommonCodeDetail = gql`
  input NewCommonCodeDetail {
    commonCode: ObjectRef!
    name: String!
    description: String
    rank: Int!
  }
`
