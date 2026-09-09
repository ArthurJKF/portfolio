import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            Início
          </Link>
        </li>
        <li>
          <Link 
            to="/portfolio" 
            className={location.pathname === '/portfolio' ? 'active' : ''}
          >
            Portfólio
          </Link>
        </li>
        <li>
          <Link 
            to="/colecao" 
            className={location.pathname === '/colecao' ? 'active' : ''}
          >
            Coleção Criativa
          </Link>
        </li>
      </ul>
    </nav>
  )
}