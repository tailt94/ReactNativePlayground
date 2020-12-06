import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { GlobalActions } from './actions'
import createReactotron from '../setup/reactotron'

const initialState = {
  count: 0
}

function testReducer (state = initialState, action) {
  switch (action.type) {
    case GlobalActions.INCREASE:
      return { ...state, count: state.count + 1 }
    case GlobalActions.DECREASE:
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  test: testReducer,
  form: formReducer
})

function initStore () {
  const reactotron = createReactotron()
  const store = createStore(rootReducer, reactotron.createEnhancer())
  return store
}

const store = initStore()

export default store
