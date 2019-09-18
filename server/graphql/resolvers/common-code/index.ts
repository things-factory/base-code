import { commonCodeResolver } from './common-code'
import { commonCodesResolver } from './common-codes'

import { updateCommonCode } from './update-common-code'
import { createCommonCode } from './create-common-code'
import { deleteCommonCode } from './delete-common-code'
import { deleteCommonCodes } from './delete-common-codes'
import { updateMultipleCommonCode } from './update-multiple-common-code'

export const Query = {
  ...commonCodesResolver,
  ...commonCodeResolver
}

export const Mutation = {
  ...updateCommonCode,
  ...createCommonCode,
  ...deleteCommonCode,
  ...deleteCommonCodes,
  ...updateMultipleCommonCode
}
