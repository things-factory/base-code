import { getRepository } from 'typeorm'
import { CommonCode } from '../../../entities'

export const commonCodeResolver = {
  async commonCode(_: any, { name }, context: any) {
    const repository = getRepository(CommonCode)

    return await repository.findOne({
      where: { domain: context.domain, name },
      relations: ['domain', 'details', 'creator', 'updater']
    })
  }
}
