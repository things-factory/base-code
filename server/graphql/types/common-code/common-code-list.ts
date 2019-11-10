import gql from 'graphql-tag'

export const CommonCodeList = gql`
  type CommonCodeList {
    items: [CommonCode]
    total: Int
  }
`
