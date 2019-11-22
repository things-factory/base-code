import { getRepository } from 'typeorm'
import { CommonCode } from '../../../entities'

export const deleteCommonCodes = {
  async deleteCommonCodes(_: any, { ids }, _context: any) {
    return await deleteCodes(ids)
  }
}

export async function deleteCodes(ids: string[] | number[]): Promise<void> {
  await getRepository(CommonCode).delete(ids)
}
