import { getRepository, In } from 'typeorm'
import { CommonCodeDetail } from '../../../entities'

export const deleteCommonCodeDetails = {
  async deleteCommonCodesDetails(_: any, { names }) {
    await getRepository(CommonCodeDetail).delete({
      name: In(names)
    })

    return true
  }
}
