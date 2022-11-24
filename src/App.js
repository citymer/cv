import { Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import './styles/index.scss'
import Competences from './pages/Competences'
import Projets from './pages/Projets'
import Formations from './pages/Formations'
import Autres from './pages/Autres'
import Centres from './pages/Centres'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/competences-techniques" element={<Competences />}></Route>
        <Route path="/projets-realises" element={<Projets />}></Route>
        <Route path="/formations" element={<Formations />}></Route>
        <Route path="/autres" element={<Autres />}></Route>
        <Route path="/centre-interet" element={<Centres />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
