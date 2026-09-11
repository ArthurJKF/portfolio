import { Link, useLocation } from 'react-router-dom'
import { Folder, CaretDown, House } from '@phosphor-icons/react'

export default function Navbar() {
  const location = useLocation()
  const isPortfolio = location.pathname === '/portfolio'

  return (
    <header className="navbar-wrapper">
      <nav aria-label="Navegação Principal">
        <ul className="nav-links-main">
          <li>
            <Link 
              to="/" 
              className={`nav-home-btn ${location.pathname === '/' ? 'active' : ''}`}
              title="Início"
              aria-label="Início"
            >
              <House size={18} weight={location.pathname === '/' ? 'fill' : 'regular'} />
            </Link>
          </li>

          {/* Item Portfólio com Menu Diretório ao passar o mouse */}
          <li className="nav-dropdown-item">
            <Link 
              to="/portfolio" 
              className={`nav-directory-link ${isPortfolio ? 'active' : ''}`}
            >
              <Folder size={14} weight="fill" className="nav-folder-icon" />
              <span>portfolio/</span>
              <CaretDown size={11} weight="bold" className="dropdown-arrow" />
            </Link>

            {/* Menu Dropdown Estilo Árvore de Diretório */}
            <div className="directory-dropdown">
              <div className="directory-tree">
                <a href="/portfolio#sobre-mim" className="tree-file">
                  <span className="tree-branch">├──</span>
                  <span className="file-name">sobre_mim.md</span>
                </a>
                <a href="/portfolio#formacao" className="tree-file">
                  <span className="tree-branch">├──</span>
                  <span className="file-name">formacao.edu</span>
                </a>
                <a href="/portfolio#trajetoria" className="tree-file">
                  <span className="tree-branch">├──</span>
                  <span className="file-name">trajetoria.timeline</span>
                </a>
                <a href="/portfolio#projetos" className="tree-file">
                  <span className="tree-branch">├──</span>
                  <span className="file-name">projetos.tsx</span>
                </a>
                <a href="/portfolio#stack" className="tree-file">
                  <span className="tree-branch">├──</span>
                  <span className="file-name">competencias.json</span>
                </a>
                <a href="/portfolio#certificados" className="tree-file">
                  <span className="tree-branch">├──</span>
                  <span className="file-name">certificados.pdf</span>
                </a>
                <a href="/portfolio#contato" className="tree-file">
                  <span className="tree-branch">└──</span>
                  <span className="file-name">contato.sh</span>
                </a>
              </div>
            </div>
          </li>

          <li>
            <Link 
              to="/colecao" 
              className={`nav-directory-link ${location.pathname === '/colecao' ? 'active' : ''}`}
            >
              <Folder size={14} weight="fill" className="nav-folder-icon" />
              <span>colecao_de_criacoes/</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}