import { getRepository } from 'typeorm'
import { CommonCodeDetail } from '../../../entities'

export const commonCodeDetailResolver = {
  async commonCodeDetail(_: any, { name }, context: any) {
    return await getRepository(CommonCodeDetail).findOne({
      where: { domain: context.state.domain, name },
      relations: ['domain', 'parent', 'creator', 'updater']
    })
  }
}
