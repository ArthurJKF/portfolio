import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Folder, CaretDown, House, List, X } from '@phosphor-icons/react'

export default function Navbar() {
  const location = useLocation()
  const isPortfolio = location.pathname === '/portfolio'
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
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

            {/* Item Portfólio (Oculto no Mobile) */}
            <li className="nav-dropdown-item hide-on-mobile">
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

            {/* Item Coleção (Oculto no Mobile) */}
            <li className="hide-on-mobile">
              <Link 
                to="/colecao" 
                className={`nav-directory-link ${location.pathname === '/colecao' ? 'active' : ''}`}
              >
                <Folder size={14} weight="fill" className="nav-folder-icon" />
                <span>colecao_de_criacoes/</span>
              </Link>
            </li>

            {/* Botão Hamburguer (Exibido apenas no Mobile via CSS) */}
            <li className="mobile-menu-btn">
              <button onClick={() => setIsMenuOpen(true)} aria-label="Abrir menu">
                <List size={20} weight="bold" />
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Overlay da Sidebar */}
      <div 
        className={`mobile-sidebar-overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      />

      {/* Sidebar Mobile */}
      <aside className={`mobile-sidebar ${isMenuOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <span className="directory-header" style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
            <Folder size={14} weight="fill" className="nav-folder-icon" /> root/
          </span>
          <button onClick={closeMenu} className="cert-modal-close" style={{position: 'relative', top: 0, right: 0}}>
            <X size={18} weight="bold" />
          </button>
        </div>
        
        <div className="sidebar-content">
          <div className="directory-tree">
            <span className="tree-branch" style={{display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px'}}>
              <Folder size={14} weight="fill" className="nav-folder-icon" /> portfolio/
            </span>
            <a href="/portfolio#sobre-mim" onClick={closeMenu} className="tree-file">
              <span className="tree-branch">├──</span>
              <span className="file-name">sobre_mim.md</span>
            </a>
            <a href="/portfolio#formacao" onClick={closeMenu} className="tree-file">
              <span className="tree-branch">├──</span>
              <span className="file-name">formacao.edu</span>
            </a>
            <a href="/portfolio#trajetoria" onClick={closeMenu} className="tree-file">
              <span className="tree-branch">├──</span>
              <span className="file-name">trajetoria.timeline</span>
            </a>
            <a href="/portfolio#projetos" onClick={closeMenu} className="tree-file">
              <span className="tree-branch">├──</span>
              <span className="file-name">projetos.tsx</span>
            </a>
            <a href="/portfolio#stack" onClick={closeMenu} className="tree-file">
              <span className="tree-branch">├──</span>
              <span className="file-name">competencias.json</span>
            </a>
            <a href="/portfolio#certificados" onClick={closeMenu} className="tree-file">
              <span className="tree-branch">├──</span>
              <span className="file-name">certificados.pdf</span>
            </a>
            <a href="/portfolio#contato" onClick={closeMenu} className="tree-file">
              <span className="tree-branch">└──</span>
              <span className="file-name">contato.sh</span>
            </a>
            
            <br />
            <Link to="/colecao" onClick={closeMenu} className="tree-file" style={{ marginLeft: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Folder size={14} weight="fill" className="nav-folder-icon" />
              <span className="file-name">colecao_de_criacoes/</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}