/* eslint-disable react-refresh/only-export-components */
import { Form, redirect } from 'react-router-dom'

const CreatePost = () => {
  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          User Id
        </label>
        <input
          type="text"
          name="userid"
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
          name="title"
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
          name="body"
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
          name="reactions"
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
          name="tags"
          className="form-control"
          id="tags"
          placeholder="enter your tags with space..."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  )
}

export async function createPostAction(data) {
  const formData = await data.request.formData()
  const postData = Object.fromEntries(formData)
  postData.tags = postData.tags.split(' ')

  console.log(postData)
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post)
    })
  return redirect('/')
}

export default CreatePost
