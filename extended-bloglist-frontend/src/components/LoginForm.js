import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from '../styledComponents/Button'
import { Input } from '../styledComponents/Imput'
import { CenterScreen, Title } from '../styledComponents/StylingDivNav'

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin(username, password)
  }

  return (
    <div>
      <Title>
        <h3>Log in to Blog application</h3>
      </Title>
      <CenterScreen>
        <Form onSubmit={handleSubmit}>
          <Form.Group id="username">
            username
            <Input
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              id="username"
            />
          </Form.Group>
          <Form.Group id="password">
            password
            <Input
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              id="password"
            />
          </Form.Group>
          <Button id="login-button" type="submit">
            login
          </Button>
        </Form>
      </CenterScreen>
    </div>
  )
}

export default LoginForm
