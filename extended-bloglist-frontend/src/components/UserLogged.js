import { useDispatch } from 'react-redux'
import { logging } from '../reducers/loginReducer'
import LoginForm from './LoginForm'

const UserLogged = () => {
  const dispatch = useDispatch()

  const loggingUser = async (username, password) => {
    dispatch(logging(username, password))
  }
  return <LoginForm onLogin={loggingUser} />
}

export default UserLogged
