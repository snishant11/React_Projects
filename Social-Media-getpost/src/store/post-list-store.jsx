import { useReducer, createContext, useEffect, useState } from 'react'

export const PostListContext = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},

  deletePost: () => {},
})

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList

  if (action.type === 'ADD_POST') {
    newPostList = [action.payload, ...currentPostList]
    return newPostList
  } else if (action.type === 'DELETE_POST') {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.id
    )
    return newPostList
  } else if (action.type === 'ADD_SERVER_POSTS') {
    newPostList = action.payload.posts
    return newPostList
  }
  return newPostList
}

const PostListContextProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, [])
  const [fetching, setFetching] = useState(false)

  const addPost = (post) => {
    const addItemAction = {
      type: 'ADD_POST',
      payload: post,
    }
    dispatchPostList(addItemAction)
  }

  const getPostsFromServer = (posts) => {
    const getPostsFromServerAction = {
      type: 'ADD_SERVER_POSTS',
      payload: {
        posts,
      },
    }
    dispatchPostList(getPostsFromServerAction)
  }

  // deleting post
  const deletePost = (id) => {
    const deleteItemAction = {
      type: 'DELETE_POST',
      payload: {
        id,
      },
    }
    dispatchPostList(deleteItemAction)
  }

  //fetching data from dummy server

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
    <PostListContext.Provider
      value={{ postList, fetching, addPost, getPostsFromServer, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  )
}
// const DEFAULT_POST_LIST = [
//   {
//     id: '1',
//     title: 'Going to Mumbai',
//     body: 'Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.',
//     reactions: 2,
//     userId: 'user-9',
//     tags: ['vacation', 'Mumbai', 'Enjoying'],
//   },
//   {
//     id: '2',
//     title: 'Paas ho bhai',
//     body: '4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.',
//     reactions: 15,
//     userId: 'user-12',
//     tags: ['Graduating', 'Unbelievable'],
//   },
//   {
//     id: '3',
//     title: 'Paas ho bhai',
//     body: '4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.',
//     reactions: 15,
//     userId: 'user-12',
//     tags: ['Graduating', 'Unbelievable'],
//   },
// ]

export default PostListContextProvider
