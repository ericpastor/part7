import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationSlice = createSlice({
  name: 'notificaton',
  initialState,
  reducers: {
    createNotification(state, action) {
      const { message, type } = action.payload
      return {
        message: message,
        type: type,
      }
    },
    clearNotification() {
      return null
    },
  },
})

export const { createNotification, clearNotification } =
  notificationSlice.actions

let timeoutId = null

export const setNotification = (message, seconds, type) => {
  return (dispatch) => {
    dispatch(createNotification({ message, type }))

    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      dispatch(clearNotification())
    }, 1000 * seconds)
  }
}

export default notificationSlice.reducer
