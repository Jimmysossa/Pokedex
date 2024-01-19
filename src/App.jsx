import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PokemonPage from './pages/PokemonPage'
import PokedexPage from './pages/PokedexPage'
import ProtectedRoutes from './pages/ProtectedRoutes'


function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={ <HomePage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={ <PokedexPage />} />
          <Route path='/pokede/:id' element={ <PokemonPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
