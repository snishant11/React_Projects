import { useContext } from 'react'
import { PostListContext } from '../store/post-list-store'
import Post from './Post'
import WelcomeMessage from './WelcomeMessage'

const PostList = () => {
  const { postList, getPostsFromServer } = useContext(PostListContext)
  const handleGetPostClick = () => {
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((data) => getPostsFromServer(data.posts))
  }
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}

export default PostList
