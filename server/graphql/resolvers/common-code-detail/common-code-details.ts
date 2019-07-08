import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { CommonCodeDetail } from '../../../entities'

export const commonCodeDetailsResolver = {
  async commonCodeDetails(_: any, params: ListParam) {
    const queryBuilder = getRepository(CommonCodeDetail).createQueryBuilder()
    buildQuery(queryBuilder, params)

    const [items, total] = await queryBuilder
      .leftJoinAndSelect('CommonCodeDetail.domain', 'Domain')
      .leftJoinAndSelect('CommonCodeDetail.parent', 'Parent')
      .leftJoinAndSelect('CommonCodeDetail.creator', 'Creator')
      .leftJoinAndSelect('CommonCodeDetail.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
