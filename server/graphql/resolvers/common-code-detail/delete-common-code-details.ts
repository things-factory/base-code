import { getRepository, In } from 'typeorm'
import { CommonCodeDetail } from '../../../entities'

export const deleteCommonCodeDetails = {
  async deleteCommonCodeDetails(_: any, { names }, context: any) {
    await getRepository(CommonCodeDetail).delete({
      domain: context.state.domain,
      name: In(names)
    })

    return true
  }
}
