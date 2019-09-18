import { gql } from 'apollo-server-koa'

export const CommonCodeDetailPatch = gql`
  input CommonCodeDetailPatch {
    name: String
    parent: String
    description: String
    rank: Int
    cuFlag: String
  }
`
