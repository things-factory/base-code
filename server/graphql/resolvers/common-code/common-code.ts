import { getRepository } from 'typeorm'
import { CommonCode } from '../../../entities'

export const commonCodeResolver = {
  async commonCode(_, { domain, name }, context, info) {
    const repository = getRepository(CommonCode)

    return await repository.findOne(
      { domain, name },
      {
        relations: ['commonCodeDetails']
      }
    )
  }
}
