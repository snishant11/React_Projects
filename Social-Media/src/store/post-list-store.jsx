import { useReducer, createContext } from 'react'

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
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
  }
  return newPostList
}

const PostListContextProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  )
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    const addItemAction = {
      type: 'ADD_POST',
      payload: {
        id: Date.now(),
        userId,
        postTitle,
        postBody,
        reactions,
        tags,
      },
    }
    dispatchPostList(addItemAction)
    console.log(userId, tags, postTitle)
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
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  )
}
const DEFAULT_POST_LIST = [
  {
    id: '1',
    postTitle: 'Going to Mumbai',
    postBody:
      'Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.',
    reactions: 2,
    userId: 'user-9',
    tags: ['vacation', 'Mumbai', 'Enjoying'],
  },
  {
    id: '2',
    postTitle: 'Paas ho bhai',
    postBody: '4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.',
    reactions: 15,
    userId: 'user-12',
    tags: ['Graduating', 'Unbelievable'],
  },
  {
    id: '3',
    postTitle: 'Paas ho bhai',
    postBody: '4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.',
    reactions: 15,
    userId: 'user-12',
    tags: ['Graduating', 'Unbelievable'],
  },
]

export default PostListContextProvider
