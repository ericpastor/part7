// import { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
// import { useDispatch, useSelector } from 'react-redux'
// import { removeBlog, likeBlog, initializeBlogs } from '../reducers/blogReducer'
// import { setNotification } from '../reducers/notificationReducer'
// import { Link } from 'react-router-dom'

// const BlogDetails = ({ blog, visible, own }) => {
//   const dispatch = useDispatch()

//   const blogs = useSelector((state) => state.blogs)

//   const addedBy = blog.user && blog.user.name ? blog.user.name : 'anonymous'

//   useEffect(() => {
//     dispatch(initializeBlogs())
//   }, [dispatch])

//   if (!visible) return null

//   const like = (id) => {
//     const blog = blogs.find((b) => b.id === id)
//     dispatch(likeBlog(blog))
//     dispatch(setNotification(`you liked: ${blog.title} by ${blog.author}`, 5))
//   }

//   const handleClickRemove = () => {
//     dispatch(removeBlog(blog.id))
//   }

//   console.log(blog)

//   return (
//     <div>
//       <div>
//         <a href={blog.url}>{blog.url}</a>
//       </div>
//       <div>
//         <button onClick={() => like(blog.id)}>likes:</button>
//         {blog.likes}
//       </div>
//       {addedBy}
//       {own && (
//         <button onClick={() => handleClickRemove(blog.id)}>remove</button>
//       )}
//     </div>
//   )
// }

// const Blog = ({ blog, handleClickRemove }) => {
//   const [visible, setVisible] = useState(false)

//   const user = useSelector((state) => state.login)

//   const style = {
//     padding: 3,
//     margin: 5,
//     borderStyle: 'solid',
//     borderWidth: 1,
//   }

//   return (
//     <div style={style} className="blog">
//       <Link to={`/blogs/${blog.id}`}>
//         {blog.title} - {blog.author}
//       </Link>
//       <button onClick={() => setVisible(!visible)}>
//         {visible ? 'hide' : 'view'}
//       </button>
//       <BlogDetails
//         blog={blog}
//         visible={visible}
//         handleClickRemove={handleClickRemove}
//         own={blog.user && user.username === blog.user.username}
//       />
//     </div>
//   )
// }

// Blog.propTypes = {
//   blog: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired,
//     likes: PropTypes.number,
//     user: PropTypes.shape({
//       username: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     }),
//   }).isRequired,
//   user: PropTypes.shape({
//     username: PropTypes.string,
//   }),
//   toLikeBlog: PropTypes.func,
//   removeBlog: PropTypes.func,
// }

// export default Blog
