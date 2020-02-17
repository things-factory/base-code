import gql from 'graphql-tag'
import { client } from '@things-factory/shell'
import { gqlBuilder } from '@things-factory/utils'

export const getCodeByName = async function(name) {
  if (!name) throw new Error('name is undefined')

  const response = await client.query({
    query: gql`
      query {
        commonCode(${gqlBuilder.buildArgs({
          name
        })}) {
          details {
            rank
            name
            description
          }
        }
      }
    `
  })

  if (!response.errors && response.data.commonCode && response.data.commonCode.details) {
    return response.data.commonCode.details.sort((a, b) => a.rank - b.rank)
  } else {
    return []
  }
}
