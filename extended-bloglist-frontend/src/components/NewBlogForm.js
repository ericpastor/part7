import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from '../styledComponents/Button'
import { Input } from '../styledComponents/Imput'
import { Margins } from '../styledComponents/StylingDivNav'

const NewBlogForm = ({ onCreate }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onCreate({ title, author, url, likes: 0 })
    setAuthor('')
    setTitle('')
    setUrl('')
  }

  return (
    <Margins>
      <h3>Create new</h3>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            id="title"
            placeholder="title of the blog"
          />
        </Form.Group>
        <Form.Group>
          <Input
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
            id="author"
            placeholder="author of the blog"
          />
        </Form.Group>
        <Form.Group>
          <Input
            value={url}
            onChange={({ target }) => setUrl(target.value)}
            id="url"
            placeholder="url of the blog"
          />
        </Form.Group>

        <Button id="create-butto" type="submit">
          create
        </Button>
      </Form>
    </Margins>
  )
}

export default NewBlogForm
