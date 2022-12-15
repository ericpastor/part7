import { createSlice } from '@reduxjs/toolkit'
import { setNotification } from './notificationReducer'
import userService from '../services/user'
import loginService from '../services/login'

const loginSlice = createSlice({
  name: 'login',
  initialState: null,
  reducers: {
    login(state, action) {
      return action.payload
    },
    logout(state, action) {
      return action.payload
    },
  },
})

export const { login, logout } = loginSlice.actions

export const logging = (username, password) => {
  return async (dispatch) => {
    try {
      const user = await loginService.login({
        username,
        password,
      })
      userService.setUser(user)
      dispatch(login(user))
      dispatch(setNotification(`${user.name} logged in!`, 5))
    } catch (error) {
      dispatch(
        setNotification(
          'wrong username/password' + error.response.data.error,
          5,
          'alert'
        )
      )
    }
  }
}

export const loggingout = () => {
  return async (dispatch) => {
    userService.clearUser()
    dispatch(logout(null))
    dispatch(setNotification('good bye!', 3))
  }
}

export default loginSlice.reducer
