import { UPDATE_BASE_CODE } from '../actions/main'

const INITIAL_STATE = {
  state_main: 'ABC'
}

const main = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_BASE_CODE:
      return { ...state }

    default:
      return state
  }
}

export default main
