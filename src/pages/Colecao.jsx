import { FileText } from '@phosphor-icons/react'

export default function Colecoes() {
  return (
    <main className="page-container">
      <header className="page-header">
        <h1 className="page-title">COLEÇÃO DE CRIAÇÕES</h1>
        <p className="page-subtitle">O Arthur de longe dos projetos profissionais e acadêmicos</p>
      </header>

      {/* Foi adicionado o style={{ order: 2 }} aqui: */}
      <section className="section-block" style={{ order: 2 }}>
        <div className="contact-hero-card">
          <h3>Acesse o PDF</h3>
          
          <p className="contact-lead-sub">
            Ainda estou desenvolvendo essa página. Enquanto isso, você pode ver minha Coleção de Criações pelo PDF abaixo.
          </p>

          <div className="contact-channel-section">
            <a 
              href="/paginas/colecao-de-criacoes.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-editorial primary"
            >
              <FileText size={20} weight="bold" />
              <span>Coleção de Criações (PDF)</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}