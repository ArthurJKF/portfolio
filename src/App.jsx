import { Routes, Route } from 'react-router-dom'
import ShaderBg from './components/ShaderBg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'

export default function App() {
  return (
    <>
      <ShaderBg />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <Footer />
    </>
  )
}