import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import PokeFlex from './PokeFlex'
import PokeGrid from './PokeGrid'



const App = () => {

  return (
    <Routes>
      <Route path = "/" element={<Home/>} />
      <Routes path ="PokeFlex" element={<PokeFlex/>}/>
      <Routes path ="PokeFlex" element={<PokeGrind/>}/>


    </Routes>
  )
}

export default App
