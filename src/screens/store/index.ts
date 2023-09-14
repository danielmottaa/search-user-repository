import { configureStore } from '@reduxjs/toolkit'

import useReducer from './ducks/user'

export default configureStore({
  reducer: {user: useReducer}
})