import { useDispatch } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'
import NewBlogForm from './NewBlogForm'
import Togglable from './Togglable'
import { useRef } from 'react'
import { setNotification } from '../reducers/notificationReducer'

const BlogCreated = () => {
  const dispatch = useDispatch()

  const blogFormRef = useRef()

  const addBlog = async (blog) => {
    dispatch(createBlog(blog))
      .then(() => {
        dispatch(
          setNotification(
            `a new blog '${blog.title}' by ${blog.author} added`,
            5
          )
        )
        blogFormRef.current.toggleVisibility()
      })
      .catch((error) => {
        dispatch(
          setNotification(
            'creating a blog failed: ' + error.response.data.error,
            5,
            'alert'
          )
        )
      })
  }
  return (
    <Togglable buttonLabel="new blog" ref={blogFormRef}>
      <NewBlogForm onCreate={addBlog} />
    </Togglable>
  )
}

export default BlogCreated
