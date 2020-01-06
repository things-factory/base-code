import gql from 'graphql-tag'

export const CommonCodeDetailPatch = gql`
  input CommonCodeDetailPatch {
    id: String
    name: String
    commonCode: ObjectRef
    description: String
    rank: Int
    cuFlag: String
  }
`
