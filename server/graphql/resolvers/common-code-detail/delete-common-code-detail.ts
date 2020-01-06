import { getRepository } from 'typeorm'
import { CommonCodeDetail } from '../../../entities'

export const deleteCommonCodeDetail = {
  async deleteCommonCodeDetail(_: any, { id }, _context: any) {
    return await deleteCodeDetail(id)
  }
}

export async function deleteCodeDetail(id: string | number): Promise<void> {
  await getRepository(CommonCodeDetail).delete(id)
}
