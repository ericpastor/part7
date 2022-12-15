import { useEffect } from 'react'
import Notification from './components/Notification'
import BlogCreated from './components/BlogCreated'
import { useDispatch, useSelector } from 'react-redux'
import { initializeBlogs } from './reducers/blogReducer'
import userService from './services/user'
import UserLogged from './components/UserLogged'
import { loggingout, login } from './reducers/loginReducer'
import { initializeUsers } from './reducers/userReducer'
import { Menu } from './components/Menu'
import { Routes, Route } from 'react-router-dom'
import { UsersBlogs, UsersInfo } from './components/UsersInfo'
import { BlogDetails, Blog } from './components/Blog'
import { Button } from './styledComponents/Button'
import { LoggedAndLogout, Title } from './styledComponents/StylingDivNav'

const App = () => {
  const user = useSelector((state) => state.login)

  const dispatch = useDispatch()

  useEffect(() => {
    const userFromStorage = userService.getUser()
    if (userFromStorage) {
      dispatch(login(userFromStorage))
    }
  }, [])

  useEffect(() => {
    dispatch(initializeUsers())
    dispatch(initializeBlogs())
  }, [dispatch])

  const handleClickOut = () => {
    dispatch(loggingout(user))
  }

  const notification = useSelector(({ notification }) => {
    return notification
  })

  if (user === null) {
    return (
      <>
        <Notification notification={notification} />
        <UserLogged />
      </>
    )
  }
  console.log(user.name)
  return (
    <div className="container">
      <Menu />
      <LoggedAndLogout>
        {user.name} logged in
        <Button onClick={handleClickOut}>logout</Button>
      </LoggedAndLogout>
      <Title>Blogs</Title>
      <Notification notification={notification} />
      <BlogCreated />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/users" element={<UsersInfo />} />
        <Route path="/users/:id" element={<UsersBlogs />} />
      </Routes>
    </div>
  )
}

export default App
