import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeBlog, likeBlog, initializeBlogs } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { Link, useParams } from 'react-router-dom'
import Comments from './Comments'
import { Button, ButtonDelete } from '../styledComponents/Button'
import { Margins } from '../styledComponents/StylingDivNav'
import { Table } from 'react-bootstrap'

export const BlogDetails = () => {
  const dispatch = useDispatch()
  const id = useParams().id

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])

  const user = useSelector((state) => state.login)

  const blogs = useSelector((state) => state.blogs)

  const blog = blogs.find((b) => b.id === id)
  if (!blog) {
    return null
  }

  const addedBy = blog.user && blog.user.name ? blog.user.name : 'anonymous'

  const own = blog.user && user.username === blog.user.username

  const like = (id) => {
    const blog = blogs.find((b) => b.id === id)
    dispatch(likeBlog(blog))
    dispatch(setNotification(`you liked: ${blog.title} by ${blog.author}`, 5))
  }

  const handleClickRemove = () => {
    dispatch(removeBlog(blog.id))
  }

  return (
    <Margins>
      <div>
        <h2>
          {blog.title} by {blog.author}{' '}
        </h2>
        <div>added by {addedBy}</div>
      </div>
      <div>
        <a href={blog.url}>{blog.url}</a>
      </div>
      <div>
        <Button onClick={() => like(blog.id)}>likes: {blog.likes}</Button>
        {own && (
          <ButtonDelete onClick={() => handleClickRemove(blog.id)}>
            remove
          </ButtonDelete>
        )}
      </div>
      <div>
        <Comments blog={blog} />
      </div>
    </Margins>
  )
}

export const Blog = () => {
  const blogs = useSelector((state) => state.blogs)
  const byLikes = (b1, b2) => (b2.likes > b1.likes ? 1 : -1)

  const style = {
    padding: 3,
    margin: 5,
    borderStyle: 'solid',
    borderWidth: 1,
  }

  return (
    <Margins>
      <Table striped>
        <tbody>
          {[...blogs].sort(byLikes).map((blog) => (
            <tr key={blog.id} style={style} className="blog">
              <td>
                <Link to={`/blogs/${blog.id}`}>
                  {blog.title}
                  {blog.author}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Margins>
  )
}
