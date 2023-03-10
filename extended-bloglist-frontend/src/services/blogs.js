import axios from 'axios'
import userService from './user'

const baseUrl = '/api/blogs'

const config = () => {
  return {
    headers: {
      Authorization: `bearer ${userService.getToken()}`,
    },
  }
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject, config())
  return response.data
}

const update = async (id, blog, user) => {
  const object = { ...blog, likes: blog.likes + 1, user }
  const response = await axios.put(`${baseUrl}/${id}`, object)
  return response.data
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`, config())
}

const addComment = async (id, comment) => {
  const response = await axios.post(`${baseUrl}/${id}/comments`, { comment })
  return response.data
}

export default { getAll, create, update, remove, addComment }
