import { useContext } from 'react'
import { AiFillDelete } from 'react-icons/ai'
//import PostList from './PostList'
import { PostListContext } from '../store/post-list-store'

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext)
  const { postTitle, postBody, reactions, tags, id } = post

  return (
    <div className="card post-card" style={{ width: '30rem' }}>
      <img
        src="https://github.com/mdo.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          {postTitle}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(id)}
          >
            <AiFillDelete />
          </span>
        </h5>

        <p className="card-text">{`${postBody}`}</p>
        {tags.map((tag, index) => (
          <span key={index} className="badge text-bg-primary hastag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          {`This post has been reacted by ${reactions} people`}
        </div>
      </div>
    </div>
  )
}

export default Post
