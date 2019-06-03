import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { CommonCode } from './common-code'
import { CommonCodeList } from './common-code-list'
import { CommonCodePatch } from './common-code-patch'
import { NewCommonCode } from './new-common-code'

export const Mutation = `
  createCommonCode (
    commonCode: NewCommonCode!
  ): CommonCode

  updateCommonCode (
    id: String!
    patch: CommonCodePatch!
  ): CommonCode

  deleteCommonCode (
    id: String!
  ): CommonCode

  publishCommonCode (
    id: String!
  ): CommonCode
`

export const Query = `
  commonCodes(filters: [Filter], pagination: Pagination, sortings: [Sorting]): CommonCodeList
  commonCode(id: String!): CommonCode
`

export const Types = [Filter, Pagination, Sorting, CommonCode, NewCommonCode, CommonCodePatch, CommonCodeList]
