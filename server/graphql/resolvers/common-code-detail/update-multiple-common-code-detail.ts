import { getRepository } from 'typeorm'
import { CommonCodeDetail, CommonCode } from '../../../entities'

export const updateMultipleCommonCodeDetail = {
  async updateMultipleCommonCodeDetail(_: any, { patches }, context: any) {
    let results = []
    const _createRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === '+')
    const _updateRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === 'M')
    const commonCodeDetailRepo = getRepository(CommonCodeDetail)
    const commoncodeRepo = getRepository(CommonCode)

    if (_createRecords.length > 0) {
      for (let i = 0; i < _createRecords.length; i++) {
        const newRecord = _createRecords[i]

        if (newRecord.commoncode && newRecord.commoncode.id) {
          newRecord.commoncode = await commoncodeRepo.findOne(newRecord.commoncode.id)
        }

        const result = await commonCodeDetailRepo.save({
          domain: context.state.domain,
          creator: context.state.user,
          updater: context.state.user,
          ...newRecord
        })

        results.push({ ...result, cuFlag: '+' })
      }
    }

    if (_updateRecords.length > 0) {
      for (let i = 0; i < _updateRecords.length; i++) {
        const newRecord = _updateRecords[i]
        const commonCodeDetail = await commonCodeDetailRepo.findOne(newRecord.id)

        if (newRecord.commoncode && newRecord.commoncode.id) {
          newRecord.commoncode = await commoncodeRepo.findOne(newRecord.commoncode.id)
        }

        const result = await commonCodeDetailRepo.save({
          ...commonCodeDetail,
          ...newRecord,
          updater: context.state.user
        })

        results.push({ ...result, cuFlag: 'M' })
      }
    }

    return results
  }
}
