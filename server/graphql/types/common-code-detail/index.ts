import { CommonCodeDetail } from './common-code-detail'
import { CommonCodeDetailList } from './common-code-detail-list'
import { CommonCodeDetailPatch } from './common-code-detail-patch'
import { NewCommonCodeDetail } from './new-common-code-detail'

export const Mutation = `
  createCommonCodeDetail (
    commonCodeDetail: NewCommonCodeDetail!
  ): CommonCodeDetail

  updateCommonCodeDetail (
    name: String!
    patch: CommonCodeDetailPatch!
  ): CommonCodeDetail

  updateMultipleCommonCodeDetail (
    patches: [CommonCodeDetailPatch]!
  ): [CommonCodeDetail]

  deleteCommonCodeDetail (
    name: String!
  ): Boolean

  deleteCommonCodeDetails (
    names: [String]!
  ): Boolean
`

export const Query = `
  commonCodeDetails(filters: [Filter], pagination: Pagination, sortings: [Sorting]): CommonCodeDetailList
  commonCodeDetail(name: String!): CommonCodeDetail
`

export const Types = [CommonCodeDetail, NewCommonCodeDetail, CommonCodeDetailPatch, CommonCodeDetailList]
