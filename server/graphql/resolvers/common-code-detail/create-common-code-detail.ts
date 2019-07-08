import { getRepository } from 'typeorm'
import { CommonCode, CommonCodeDetail } from '../../../entities'
import { common } from 'protobufjs'

export const createCommonCodeDetail = {
  async createCommonCodeDetail(_: any, { commonCodeDetail }, context: any) {
    commonCodeDetail.parent = await getRepository(CommonCode).findOne(commonCodeDetail.parent)

    return await getRepository(CommonCodeDetail).save({
      domain: context.domain,
      creatorId: context.state.user.id,
      updaterId: context.state.user.id,
      ...commonCodeDetail
    })
  }
}
