import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { CommonCodeDetail } from './common-code-detail'
import { CommonCodeDetailList } from './common-code-detail-list'
import { CommonCodeDetailPatch } from './common-code-detail-patch'
import { NewCommonCodeDetail } from './new-common-code-detail'

export const Mutation = `
  createCommonCodeDetail (
    commonCodeDetail: NewCommonCodeDetail!
    groupId: String!
  ): CommonCodeDetail

  updateCommonCodeDetail (
    id: String!
    patch: CommonCodeDetailPatch!
  ): CommonCodeDetail

  deleteCommonCodeDetail (
    id: String!
  ): CommonCodeDetail

  publishCommonCodeDetail (
    id: String!
    published: Boolean
  ): CommonCodeDetail
`

export const Query = `
  commonCodeDetails(filters: [Filter], pagination: Pagination, sortings: [Sorting]): CommonCodeDetailList
  commonCodeDetail(id: String!): CommonCodeDetail
`

export const Types = [
  Filter,
  Pagination,
  Sorting,
  CommonCodeDetail,
  NewCommonCodeDetail,
  CommonCodeDetailPatch,
  CommonCodeDetailList
]
