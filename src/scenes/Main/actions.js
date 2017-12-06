import NavigatorActions from '@navigation/actions'
import { Routes } from '../../navigation/routes'

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

export const openMenu = () => {
  return {
    type: NavigatorActions.MOVE,
    value: 'DrawerMenu',
  }
}

export const moveToAdd = () => {
  return {
    type: NavigatorActions.MOVE,
    value: 'Add',
  }
}

export const moveToSettings = () => {
  return {
    type: NavigatorActions.MOVE,
    value: 'Settings',
  }
}