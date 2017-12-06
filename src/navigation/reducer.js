import { NavigationActions } from 'react-navigation'

import { MenuNavigator as Navigator } from './App'
import actions from './actions'

const initialState = Navigator.router.getStateForAction(
  NavigationActions.init()
)

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.MOVE:
      return Navigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: action.value }),
        state
      )
    case actions.RESET:
      return Navigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: action.value })],
        })
      )
    default:
      return Navigator.router.getStateForAction(action, state)
  }
}
