import { configureStore } from '@reduxjs/toolkit'
import SignReducer from './features/signUpSlice'

export const store = configureStore({
  reducer: {
      signUp: SignReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch