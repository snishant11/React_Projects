/* eslint-disable react-refresh/only-export-components */
import Post from './Post'
import { useLoaderData } from 'react-router-dom'

const PostList = () => {
  const postList = useLoaderData()

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}

export const postLoader = () => {
  return fetch('https://dummyjson.com/posts')
    .then((res) => res.json())
    .then((data) => {
      return data.posts
    })
}
export default PostList
