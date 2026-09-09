import { Link } from 'react-router-dom'
import { LinkedinLogo, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react'

export default function Home() {
  return (
    <div className="page-container">
      <main className="home-container animate-cascade">
        <h1 className="main-title" style={{ '--i': 1 }}>
          ARTHUR JACOMEL
        </h1>

        <p className="tagline" style={{ '--i': 2 }}>
          Desenvolvimento de Software • Negócios • Inovação
        </p>

        <section className="cta-section" style={{ '--i': 3 }}>
          <span className="cta-label">Confira:</span>
          <div className="buttons-group">
            <Link to="/portfolio" className="btn-brutal">Portfólio de Projetos</Link>
            <Link to="/colecao" className="btn-brutal">Coleção de Criações</Link>
          </div>
        </section>

        <div className="social-links" style={{ '--i': 4 }}>
          <a href="https://linkedin.com/in/arthur-jacomel" target="_blank" rel="noreferrer">
            <LinkedinLogo size={32} />
          </a>
          <a href="https://instagram.com/arthur.jkf" target="_blank" rel="noreferrer">
            <InstagramLogo size={32} />
          </a>
          <a href="https://wa.me/41999114699" target="_blank" rel="noreferrer">
            <WhatsappLogo size={32} />
          </a>
        </div>
      </main>
    </div>
  )
}