import { gql } from 'apollo-server-koa'

export const CommonCode = gql`
  type CommonCode {
    id: String
    domain: Domain
    name: String
    description: String
    details: [CommonCodeDetail]
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
