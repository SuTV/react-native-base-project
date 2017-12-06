const DEFAULT_ACTION = 'DEFAULT_ACTION'

export const actions = {
  DEFAULT_ACTION,
}

export const defaultAction = () => {
  return async dispatch => {
    dispatch({
      type: DEFAULT_ACTION,
      value: [],
    })
  }
}
