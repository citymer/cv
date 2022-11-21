import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './styles/index.scss'
import Competences from './pages/Competences'
import Projets from './pages/Projets'
import Formations from './pages/Formations'
import Autres from './pages/Autres'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/acceuil" element={<Home />}></Route>
        <Route path="/competences-techniques" element={<Competences />}></Route>
        <Route path="/projets-realises" element={<Projets />}></Route>
        <Route path="/formations" element={<Formations />}></Route>
        <Route path="/autres" element={<Autres />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
