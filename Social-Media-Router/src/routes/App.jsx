import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import PostListContextProvider from '../store/post-list-store'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [selectedTab, setSelectedTab] = useState('Home')
  return (
    <PostListContextProvider>
      <div className="app-container">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListContextProvider>
  )
}

export default App
