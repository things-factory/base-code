import { Filter, ObjectRef, Pagination, Sorting } from '@things-factory/shell'
import * as CommonCode from './common-code'
import * as CommonCodeDetail from './common-code-detail'

export const queries = [CommonCode.Query, CommonCodeDetail.Query]

export const mutations = [CommonCode.Mutation, CommonCodeDetail.Mutation]

export const types = [Filter, ObjectRef, Pagination, Sorting, ...CommonCode.Types, ...CommonCodeDetail.Types]
