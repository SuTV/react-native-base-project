import { actions } from './actions'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.DEFAULT_ACTION:
      return Object.assign({}, state, {
        items: action.value,
      })
    default:
      return state
  }
}
