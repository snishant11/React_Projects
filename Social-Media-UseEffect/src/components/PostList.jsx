import { useContext, useEffect, useState } from 'react'
import { PostListContext } from '../store/post-list-store'
import Post from './Post'

import WelcomeMessage from './WelcomeMessage'
import LoadingSpinner from './LoadingSpinner'

const PostList = () => {
  const { postList, getPostsFromServer } = useContext(PostListContext)
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    setFetching(true)
    fetch('https://dummyjson.com/posts', { signal })
      .then((res) => res.json())
      .then((data) => {
        getPostsFromServer(data.posts)
        setFetching(false)
      })

    return () => {
      controller.abort()
    }
  }, [])

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
