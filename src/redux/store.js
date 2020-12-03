import { createStore } from 'redux'
import { GlobalActions } from './actions'
import reactotron from '../setup/reactotron'

const initialState = {
  count: 0
}

function rootReducer (state = initialState, action) {
  switch (action.type) {
    case GlobalActions.INCREASE:
      return { ...state, count: state.count + 1 }
    case GlobalActions.DECREASE:
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

function initStore () {
  const store = createStore(rootReducer, reactotron.createEnhancer())
  return store
}

const store = initStore()

export default store
