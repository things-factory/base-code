import gql from 'graphql-tag'

export const CommonCodeDetailList = gql`
  type CommonCodeDetailList {
    items: [CommonCodeDetail]
    total: Int
  }
`
