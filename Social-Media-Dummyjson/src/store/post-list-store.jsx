import { useReducer, createContext } from 'react'

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  getPostsFromServer: () => {},
  deletePost: () => {},
})

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList
  if (action.type === 'ADD_POST') {
    newPostList = [action.payload, ...currentPostList]
    console.log(newPostList)
    return newPostList
  } else if (action.type === 'DELETE_POST') {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.id
    )
    return newPostList
  } else if (action.type === 'ADD_SERVER_POSTS') {
    newPostList = action.payload.posts
    console.log(newPostList)
    return newPostList
  }
  return newPostList
}

const PostListContextProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, [])

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    const addItemAction = {
      type: 'ADD_POST',
      payload: {
        id: Date.now(),
        userId: userId,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        tags: tags,
      },
    }
    dispatchPostList(addItemAction)
    console.log(userId, tags, postTitle)
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

  const deletePost = (id) => {
    const deleteItemAction = {
      type: 'DELETE_POST',
      payload: {
        id,
      },
    }
    dispatchPostList(deleteItemAction)
  }
  return (
    <PostListContext.Provider
      value={{ postList, addPost, getPostsFromServer, deletePost }}
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
