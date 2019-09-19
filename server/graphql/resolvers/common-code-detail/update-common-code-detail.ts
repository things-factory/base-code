import { getRepository } from 'typeorm'
import { CommonCode, CommonCodeDetail } from '../../../entities'

export const updateCommonCodeDetail = {
  async updateCommonCodeDetail(_: any, { name, patch }, context: any) {
    const commonCodeDetail = await getRepository(CommonCodeDetail).findOne({ domain: context.state.domain, name })

    if (patch.commonCode && patch.commonCode.id) {
      patch.commonCode = await getRepository(CommonCode).findOne(patch.commonCode.id)
    }

    return await getRepository(CommonCodeDetail).save({
      ...commonCodeDetail,
      ...patch,
      updater: context.state.user
    })
  }
}
