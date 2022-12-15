import { useDispatch } from 'react-redux'
import { createComment } from '../reducers/blogReducer'
import { Button } from '../styledComponents/Button'
import { Input } from '../styledComponents/Imput'

const Comments = ({ blog }) => {
  const dispatch = useDispatch()

  const { id, comments } = blog

  const handleClickComment = (event) => {
    event.preventDefault()
    const comment = event.target.comment.value
    event.target.comment.value = ''

    dispatch(createComment(id, comment))
  }

  console.log(comments)

  return (
    <div>
      <form onSubmit={handleClickComment}>
        <div>
          <Input name="comment" />
          <Button>comment</Button>
        </div>
      </form>
      <strong>Comments</strong>
      {comments ? (
        <ul>
          {[...comments].map((comment, i) => (
            <li key={i}>{comment}</li>
          ))}
        </ul>
      ) : (
        <p>there are no comments</p>
      )}
    </div>
  )
}

export default Comments
