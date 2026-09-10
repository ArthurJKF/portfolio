import { Link } from 'react-router-dom'
import { LinkedinLogo, InstagramLogo, WhatsappLogo, GithubLogo } from '@phosphor-icons/react'

export default function Footer() {
  return (
    <footer className="global-footer-pro">
      <div className="footer-pro-grid">
        
        {/* Coluna 1: Bio Institucional Curta e Localização */}
        <div className="footer-col-bio">
          <h4>ARTHUR JACOMEL</h4>
          <p>
            Desenvolvedor Front-End & Gerente de Negócios na Hï Tech. 
            Conectando arquitetura técnica sustentável, viabilidade de mercado e liderança ágil.
          </p>
          <span className="footer-location">
            Curitiba, Paraná • Brasil
          </span>
        </div>

        {/* Coluna 2: Navegação Consolidada (Páginas na Horizontal + Seções abaixo de Portfólio) */}
        <div className="footer-col-nav-compact">
          <div className="footer-pages-nav">
            <Link to="/" className="footer-page-link">Início</Link>

            <div className="footer-portfolio-hub">
              <Link to="/portfolio" className="footer-page-link">Portfólio Completo</Link>
              
              <ul className="footer-sections-inline-grid">
                <li><a href="/portfolio#sobre-mim">Sobre Mim</a></li>
                <li><a href="/portfolio#formacao">Formação</a></li>
                <li><a href="/portfolio#projetos">Aplicações</a></li>
                <li><a href="/portfolio#stack">Stack</a></li>
                <li><a href="/portfolio#conquistas">Conquistas</a></li>
                <li><a href="/portfolio#certificados">Certificações</a></li>
                <li><a href="/portfolio#trajetoria">Trajetória</a></li>
                <li><a href="/portfolio#contato">Contato</a></li>
              </ul>
            </div>

            <Link to="/colecao" className="footer-page-link">Coleção de Criações</Link>
          </div>
        </div>

        {/* Coluna 3: Contatos por Escrito (Apenas texto, sem link) */}
        <div className="footer-col-contact">
          <h5 className="footer-col-title">Canais Oficiais</h5>
          <div className="footer-contact-data">
            <span className="contact-text-item">
              arthurjac.kf@gmail.com
            </span>
            <span className="contact-text-item">
              +55 (41) 99911-4699
            </span>
          </div>
        </div>

      </div>

      {/* Barra Inferior: Direitos e Dock com Ícones Originais */}
      <div className="footer-bottom-bar">
        <span>© 2026 ARTHUR JACOMEL • ENGENHARIA DE SOFTWARE & GESTÃO</span>

        <div className="footer-social-dock">
          <a href="https://linkedin.com/in/arthur-jacomel" target="_blank" rel="noreferrer" title="LinkedIn">
            <LinkedinLogo size={26} />
          </a>
          <a href="https://github.com/ArthurJKF" target="_blank" rel="noreferrer" title="GitHub">
            <GithubLogo size={26} />
          </a>
          <a href="https://instagram.com/arthur.jkf" target="_blank" rel="noreferrer" title="Instagram">
            <InstagramLogo size={26} />
          </a>
          <a href="https://wa.me/41999114699" target="_blank" rel="noreferrer" title="WhatsApp">
            <WhatsappLogo size={26} />
          </a>
        </div>
      </div>
    </footer>
  )
}