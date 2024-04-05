import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import PostListContextProvider from './store/post-list-store'
import './App.css'

function App() {
  const [selectedTab, setSelectedTab] = useState('Home')
  return (
    <PostListContextProvider>
      <div className="app-container">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header></Header>
          {selectedTab === 'Home' ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListContextProvider>
  )
}

export default App
