import { Link } from 'react-router-dom'
import { LinkedinLogo, GithubLogo, InstagramLogo, WhatsappLogo, ArrowUpRight } from '@phosphor-icons/react'

export default function Home() {
  return (
    <div className="page-container" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
      <main className="home-container">

        {/* Status Pill Superior */}
        <div className="status-pill-hero">
          <span className="status-dot"></span>
          <span>UTFPR • Hï Tech • Curitiba, PR</span>
        </div>

        {/* Nome Principal em Syne */}
        <h1 className="main-title">
          ARTHUR JACOMEL
        </h1>

        {/* Tagline Sofisticada em Instrument Serif */}
        <p className="tagline">
          Engenharia de Software, Estratégia Comercial & Liderança
        </p>

        {/* Ações com Estilo Tátil */}
        <section className="cta-section">
          <div className="buttons-group">
            <Link to="/portfolio" className="btn-editorial primary">
              <span>Acessar Portfólio</span>
              <ArrowUpRight size={18} weight="bold" />
            </Link>
            <Link to="/colecao" className="btn-editorial secondary">
              <span>Coleção de Criações</span>
            </Link>
          </div>
        </section>

        {/* Redes Sociais no Formato Original com GitHub entre LinkedIn e Insta */}
        <div className="social-links">
          <a href="https://linkedin.com/in/arthur-jacomel" target="_blank" rel="noreferrer" title="LinkedIn">
            <LinkedinLogo size={24} />
          </a>
          <a href="https://github.com/ArthurJKF" target="_blank" rel="noreferrer" title="GitHub">
            <GithubLogo size={24} />
          </a>
          <a href="https://instagram.com/arthur.jkf" target="_blank" rel="noreferrer" title="Instagram">
            <InstagramLogo size={24} />
          </a>
          <a href="https://wa.me/41999114699" target="_blank" rel="noreferrer" title="WhatsApp">
            <WhatsappLogo size={24} />
          </a>
        </div>
      </main>
    </div>
  )
}