import { getRepository } from 'typeorm'
import { CommonCode, CommonCodeDetail } from '../../../entities'

export const updateCommonCodeDetail = {
  async updateCommonCodeDetail(_: any, { name, patch }, context: any) {
    const repository = getRepository(CommonCodeDetail)
    const commonCodeDetail = await repository.findOne({
      where: { domain: context.domain, name },
      relations: ['parent']
    })

    if (patch.parent) {
      commonCodeDetail.parent = await getRepository(CommonCode).findOne(commonCodeDetail.parent)
    }

    return await repository.save({
      ...commonCodeDetail,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
