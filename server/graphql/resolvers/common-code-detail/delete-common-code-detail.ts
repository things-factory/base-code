import { getRepository } from 'typeorm'
import { CommonCodeDetail } from '../../../entities'

export const deleteCommonCodeDetail = {
  async deleteCommonCodeDetail(_: any, { name }, context: any) {
    return await getRepository(CommonCodeDetail).delete({ domain: context.domain, name })
  }
}
