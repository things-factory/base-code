import { getRepository } from 'typeorm'
import { CommonCode, CommonCodeDetail } from '../../../entities'

export const createCommonCode = {
  async createCommonCode(_: any, { commonCode }, context: any) {
    if (commonCode.details && commonCode.details.length) {
      commonCode.details = await getRepository(CommonCodeDetail).findByIds(commonCode.details)
    }

    return await getRepository(CommonCode).save({
      domain: context.state.domain,
      creator: context.state.user,
      updater: context.state.user,
      ...commonCode
    })
  }
}
