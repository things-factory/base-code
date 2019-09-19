import { getRepository } from 'typeorm'
import { CommonCode, CommonCodeDetail } from '../../../entities'

export const createCommonCodeDetail = {
  async createCommonCodeDetail(_: any, { commonCodeDetail }, context: any) {
    if (commonCodeDetail && commonCodeDetail.commonCode.id) {
      commonCodeDetail.commonCode = await getRepository(CommonCode).findOne(commonCodeDetail.commonCode.id)
    }

    return await getRepository(CommonCodeDetail).save({
      domain: context.state.domain,
      creator: context.state.user,
      updater: context.state.user,
      ...commonCodeDetail
    })
  }
}
