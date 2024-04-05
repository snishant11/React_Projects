import { useRef, useContext } from 'react'
import { PostListContext } from '../store/post-list-store'

const CreatePost = () => {
  const { addPost } = useContext(PostListContext)

  const userIdElement = useRef()
  const postTitleElement = useRef()
  const postBodyElement = useRef()
  const reactionsElement = useRef()
  const tagsElement = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const userId = userIdElement.current.value
    const postTitle = postTitleElement.current.value
    const postBody = postBodyElement.current.value
    const reactions = reactionsElement.current.value
    const tags = tagsElement.current.value.split(' ')
    addPost(userId, postTitle, postBody, reactions, tags)
    userIdElement.current.value = ''
    postTitleElement.current.value = ''
    postBodyElement.current.value = ''
    reactionsElement.current.value = ''
    tagsElement.current.value = ''
  }

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userid"
          placeholder="Enter your user id here..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Description
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="text"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="Enter no. of reactions"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Hastags
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="enter your tags with space..."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  )
}

export default CreatePost
