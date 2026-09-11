import { Link } from 'react-router-dom'
import { LinkedinLogo, GithubLogo, WhatsappLogo } from '@phosphor-icons/react'

export default function Home() {
  return (
    <div className="page-container" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
      <main className="home-container">

  

        {/* Nome Principal em Syne */}
        <h1 className="main-title">
          ARTHUR JACOMEL
        </h1>

        {/* Tagline Sofisticada em Instrument Serif */}
        <p className="tagline">
          Desenvolvimento de Software e Estratégia de Negócios
        </p>

        {/* Ações com Estilo Tátil */}
        <section className="cta-section">
          <div className="buttons-group">
            <Link to="/portfolio" className="btn-editorial primary">
              <span>Acessar Portfólio</span>
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
          <a href="https://wa.me/41999114699" target="_blank" rel="noreferrer" title="WhatsApp">
            <WhatsappLogo size={24} />
          </a>
        </div>
      </main>
    </div>
  )
}