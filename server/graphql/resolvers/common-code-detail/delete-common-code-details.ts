import { getRepository } from 'typeorm'
import { CommonCodeDetail } from '../../../entities'

export const deleteCommonCodeDetails = {
  async deleteCommonCodeDetails(_: any, { ids }, _context: any) {
    return await deleteCodeDetails(ids)
  }
}

export async function deleteCodeDetails(ids: string[] | number[]): Promise<void> {
  await getRepository(CommonCodeDetail).delete(ids)
}
