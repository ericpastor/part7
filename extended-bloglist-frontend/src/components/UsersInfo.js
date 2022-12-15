import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { StyledLink } from '../styledComponents/StyledLink'
import { Margins } from '../styledComponents/StylingDivNav'

export const UsersInfo = () => {
  const users = useSelector((state) => state.users)

  return (
    <div>
      <h3>Users Information</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>blogs created</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {users.map((user) => (
                <div key={user.id}>
                  <StyledLink to={`/users/${user.id}`}>{user.name}</StyledLink>
                </div>
              ))}
            </td>
            <td>
              {users.map((user) => (
                <div key={user.id}> {user.blogs.length}</div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export const UsersBlogs = () => {
  const users = useSelector((state) => state.users)
  const id = useParams().id
  const user = users.find((n) => n.id === id)
  if (!user) {
    return null
  }
  return (
    <Margins>
      <h3 key={user.id}>{user.name}</h3>
      <ul>
        {user.blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </Margins>
  )
}
