import {Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About'
import Slidebar from './components/Slidebar'



const App = () => {
  return (
    <>
      <Navbar/>
      <Slidebar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </>
  )
}

export default App