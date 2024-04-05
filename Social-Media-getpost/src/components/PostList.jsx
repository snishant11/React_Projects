import { useContext } from 'react'
import { PostListContext } from '../store/post-list-store'
import Post from './Post'

import WelcomeMessage from './WelcomeMessage'
import LoadingSpinner from './LoadingSpinner'

const PostList = () => {
  const { postList, fetching } = useContext(PostListContext)

  return (
    <>
      {fetching ? (
        <LoadingSpinner />
      ) : postList.length !== 0 ? (
        postList.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <WelcomeMessage />
      )}
    </>
  )
}

export default PostList
