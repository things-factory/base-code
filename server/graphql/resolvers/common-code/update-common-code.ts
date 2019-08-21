import { getRepository } from 'typeorm'
import { CommonCode, CommonCodeDetail } from '../../../entities'

export const updateCommonCode = {
  async updateCommonCode(_: any, { name, patch }, context: any) {
    const repository = getRepository(CommonCode)
    const commonCode = await repository.findOne({
      where: { domain: context.domain, name },
      relations: ['details']
    })

    const detailIds = commonCode.details.map(detail => detail.id)
    if (patch.details && patch.detail.length) {
      patch.details.forEach((detailId: string) => {
        if (!detailIds.includes(detailId)) {
          detailIds.push(detailId)
        }
      })
    }

    return await repository.save({
      ...commonCode,
      ...patch,
      details: await getRepository(CommonCodeDetail).findByIds(detailIds),
      updater: context.state.user
    })
  }
}
