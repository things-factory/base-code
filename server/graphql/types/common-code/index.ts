import { CommonCode } from './common-code'
import { CommonCodeList } from './common-code-list'
import { CommonCodePatch } from './common-code-patch'
import { NewCommonCode } from './new-common-code'

export const Mutation = `
  createCommonCode (
    commonCode: NewCommonCode!
  ): CommonCode

  updateCommonCode (
    name: String!
    patch: CommonCodePatch!
  ): CommonCode

  deleteCommonCode (
    name: String!
  ): CommonCode
`

export const Query = `
  commonCodes(filters: [Filter], pagination: Pagination, sortings: [Sorting]): CommonCodeList
  commonCode(name: String!): CommonCode
`

export const Types = [CommonCode, NewCommonCode, CommonCodePatch, CommonCodeList]
