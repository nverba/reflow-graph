import { store } from './redux-store.js'

export const dispatch = (action, state) => {
  return store.dispatch(action)
}