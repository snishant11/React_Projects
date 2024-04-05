import Controls from './Controls'
import DisplayCounter from './components/DisplayCounter'
import Header from './components/Header'
import './App.css'
import { useSelector } from 'react-redux'
import PrivacyMessage from './components/PrivacyMessage'

function App() {
  const privacy = useSelector((store) => store.privacy)
  return (
    <center>
      <div className="card" style={{ width: '35rem' }}>
        <div className="px-4 py-5 my-5 text-center">
          <Header />
          <div className="col-lg-6 mx-auto">
            {privacy ? <PrivacyMessage /> : <DisplayCounter />}
            <Controls />
          </div>
        </div>
      </div>
    </center>
  )
}

export default App
