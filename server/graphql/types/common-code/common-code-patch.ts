import gql from 'graphql-tag'

export const CommonCodePatch = gql`
  input CommonCodePatch {
    id: String
    name: String
    description: String
    details: [String]
    cuFlag: String
  }
`
