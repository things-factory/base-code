import { gql } from 'apollo-server-koa'

export const CommonCodeList = gql`
  type CommonCodeList {
    items: [CommonCode]
    total: Int
  }
`
