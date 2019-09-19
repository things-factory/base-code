import { gql } from 'apollo-server-koa'

export const CommonCodeDetailPatch = gql`
  input CommonCodeDetailPatch {
    name: String
    commoncode: ObjectRef
    description: String
    rank: Int
    cuFlag: String
  }
`
