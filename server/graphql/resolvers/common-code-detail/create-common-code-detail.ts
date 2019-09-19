import { getRepository } from 'typeorm'
import { CommonCode, CommonCodeDetail } from '../../../entities'

export const createCommonCodeDetail = {
  async createCommonCodeDetail(_: any, { commonCodeDetail }, context: any) {
    if (commonCodeDetail && commonCodeDetail.commoncode.id) {
      commonCodeDetail.commoncode = await getRepository(CommonCode).findOne(commonCodeDetail.commoncode.id)
    }

    return await getRepository(CommonCodeDetail).save({
      domain: context.state.domain,
      creator: context.state.user,
      updater: context.state.user,
      ...commonCodeDetail
    })
  }
}
