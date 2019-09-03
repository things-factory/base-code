import { getRepository } from 'typeorm'
import { CommonCode } from '../../../entities'

export const deleteCommonCode = {
  async deleteCommonCode(_: any, { name }, context: any) {
    return await getRepository(CommonCode).delete({ domain: context.state.domain, name })
  }
}
