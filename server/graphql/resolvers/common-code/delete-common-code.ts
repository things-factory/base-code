import { getRepository } from 'typeorm'
import { CommonCode } from '../../../entities'

export const deleteCommonCode = {
  async deleteCommonCode(_: any, { id }, _context: any) {
    return await deleteCode(id)
  }
}

export async function deleteCode(id: string | number): Promise<void> {
  await getRepository(CommonCode).delete(id)
}
