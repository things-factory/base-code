import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { CommonCode } from '../../../entities'

export const commonCodesResolver = {
  async commonCodes(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(CommonCode).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
