import gql from 'graphql-tag'

export const CommonCodeDetail = gql`
  type CommonCodeDetail {
    id: String
    domain: Domain
    name: String
    commonCode: CommonCode
    description: String
    rank: Int
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
