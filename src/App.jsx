import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShaderBg from './components/ShaderBg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Colecao from './pages/Colecao'

export default function App() {
  return (
    <Router>
      <ShaderBg />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/colecao" element={<Colecao />} />
      </Routes>

      <Footer />
    </Router>
  )
}