import { getRepository, In } from 'typeorm'
import { CommonCode } from '../../../entities'

export const deleteCommonCodes = {
  async deleteCommonCodes(_: any, { names }) {
    await getRepository(CommonCode).delete({
      name: In(names)
    })

    return true
  }
}
