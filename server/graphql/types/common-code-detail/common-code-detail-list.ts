import { gql } from 'apollo-server-koa'

export const CommonCodeDetailList = gql`
  type CommonCodeDetailList {
    items: [CommonCodeDetail]
    total: Int
  }
`
