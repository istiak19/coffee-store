// import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <div className='w-11/12 mx-auto'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
