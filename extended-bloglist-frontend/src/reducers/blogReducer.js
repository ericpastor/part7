import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'
import { setNotification } from './notificationReducer'

const initialState = []

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    appendBlog(state, action) {
      state.push(action.payload)
    },

    setBlogs(state, action) {
      return action.payload
    },

    setBlog(state, action) {
      const updateBlog = action.payload
      const { id } = updateBlog
      return state.map((blog) => (blog.id !== id ? blog : updateBlog))
    },
  },
})

export const { appendBlog, setBlogs, setBlog } = blogSlice.actions

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll()
    dispatch(setBlogs(blogs))
  }
}

export const createBlog = (content) => {
  return async (dispatch) => {
    const newBlog = await blogService.create(content)
    dispatch(appendBlog(newBlog))
  }
}

export const likeBlog = (blog) => {
  return async (dispatch) => {
    const updatedBlog = await blogService.update(blog.id, blog)
    dispatch(setBlog(updatedBlog))
  }
}

export const createComment = (id, comment) => {
  return async (dispatch) => {
    const updatedBlog = await blogService.addComment(id, comment)
    dispatch(setBlog(updatedBlog))
    dispatch(setNotification(`Comment ${comment} added`, 5))
  }
}

export const removeBlog = (id) => {
  return async (dispatch) => {
    const blogs = await blogService.getAll()
    const toRemove = blogs.find((b) => b.id === id)

    await blogService.remove(id)
    const ok = window.confirm(
      `remove '${toRemove.title}' by ${toRemove.author}?`
    )

    if (!ok) {
      return
    }

    const byLikes = (b1, b2) => (b2.likes > b1.likes ? 1 : -1)

    dispatch(setBlogs(blogs.filter((b) => b.id !== id).sort(byLikes))) &&
      dispatch(
        setNotification(`Deleted: ${toRemove.title} by ${toRemove.author}`, 5)
      )
  }
}

export default blogSlice.reducer
