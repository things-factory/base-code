import { gql } from 'apollo-server-koa'

export const CommonCodeDetailPatch = gql`
  input CommonCodeDetailPatch {
    name: String
    commonCode: ObjectRef
    description: String
    rank: Int
    cuFlag: String
  }
`
