import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Form from './components/Form'
import Home from './components/Home'
import Service from './components/Service'
import Navbar from './components/Navbar'

// import '../src/css/Home.css'
function App() {

  return (
    <>
      <div className='body'>
      <Navbar/>
     
      <Routes>
        <Route
          path='/Home'
          element={<Home />}
        />
        <Route
          path='/service'
          element={<Service />}
        />
        <Route
          path='/form'
          element={<Form />}
        />

      </Routes>
     
      </div>
    </>
  )
}

export default App
