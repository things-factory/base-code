import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { CommonCode } from '../../../entities'

export const commonCodesResolver = {
  async commonCodes(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(CommonCode).createQueryBuilder()
    buildQuery(queryBuilder, params, context)

    const [items, total] = await queryBuilder
      .leftJoinAndSelect('CommonCode.domain', 'Domain')
      .leftJoinAndSelect('CommonCode.details', 'CommonCodeDetail')
      .leftJoinAndSelect('CommonCode.creator', 'Creator')
      .leftJoinAndSelect('CommonCode.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
