import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "Not Auth",
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUp: (state, action) => {
          state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { signUp } = counterSlice.actions

export default counterSlice.reducer