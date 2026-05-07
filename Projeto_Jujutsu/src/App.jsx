import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Jujutsu from './pages/Jujutsu'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/jujutsu">Jujutsu</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jujutsu" element={<Jujutsu />} />
      </Routes>
    </div>
  )
}

export default App
