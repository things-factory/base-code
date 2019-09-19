import { gql } from 'apollo-server-koa'

export const CommonCodeDetail = gql`
  type CommonCodeDetail {
    id: String
    domain: Domain
    name: String
    commoncode: CommonCode
    description: String
    rank: Int
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
