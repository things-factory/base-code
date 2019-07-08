import { gql } from 'apollo-server-koa'

export const CommonCodeDetail = gql`
  type CommonCodeDetail {
    id: String
    domain: Domain
    name: String
    parent: CommonCode
    description: String
    rank: Int
    creator: User
    updater: User
  }
`
